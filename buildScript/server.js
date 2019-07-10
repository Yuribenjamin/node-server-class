import express from 'express';
import { join } from 'path';
import open from 'open';
import { PerformanceObserver, performance } from 'perf_hooks';

const obs = new PerformanceObserver((items) => {
	console.log(items.getEntries()[0].duration);
	performance.clearMarks();
});

obs.observe({ entryTypes: ['measure'] });

performance.mark('A');

function server() {
	const port = 8000;
	const app = express();

	function core() {
		app.get('/', (_req, res) => {
		res.sendFile(join(__dirname, '../src/index.html'));
		});
		app.listen(port, () =>{
			open(`http://localhost:${port}`);
		});
	}
	return core;
}

let s = server();
	s();
performance.mark("B");
performance.measure("A to B", "A", "B");

/**
 *
const express = require('express');
const path = require('path');
const open = require('open');

class Server {
	constructor(port, app) {
		this.port = port;
		this.app = app;
	}
	get() {
		this.app.get('/', (req, res)=>{
			res.sendFile(path.join(__dirname, '../src/index.html'));
			console.log(res);
		});
	}
	listen() {
		this.app.listen(this.port, (err) =>{
			if(err){
				console.log(err);
			} else {
				open(`http://localhost:${this.port}`);
			}

		});
	}
}

let server = new Server(3000, express());
server.get();
server.listen();
 */
