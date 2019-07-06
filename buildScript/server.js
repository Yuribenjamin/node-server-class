import express from 'express';
import { join } from 'path';
import open from 'open';

class Server {
	constructor(port, app) {
		this.port = port;
		this.app = app;
	}
	core() {
		this.app.get('/', (req, res)=>{res.sendFile(join(__dirname, '../src/index.html'));});
		this.app.listen(this.port,() =>{ open(`http://localhost:${this.port}`);});
	}
}

let server = new Server(3000, express());
server.core();


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
