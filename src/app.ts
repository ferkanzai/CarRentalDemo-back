import { Response, Request, Application } from "express";

const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');

const appRouter = require('./routes');

const app: Application = express();

const configApp = (app: Application) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.use(morgan('combined'));
  app.use(helmet());

  app.use('/', appRouter);

  app.use((_: Request, __: Response, next: any) => {
    next(new Error('path not found'))
  })

  app.use((error: any, _: Request, res: Response, __: any) => {
    console.log(error);
    res.status(error.code || 500).json({
      status: 'no ok',
      info: {
        error,
        message: error.message,
      },
    });
  });

  return app;
};

module.exports = configApp(app);
