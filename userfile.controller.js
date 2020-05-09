const User_Articles = require('../models/User_Articles.model.js');
var formidable = require('formidable');
var grid = require('gridfs-stream');
var fs = require('fs');
var util = require('util');
var mongoose = require('mongoose');
var multer = require("multer");
var express = require('express');

exports.create = (req, res) => {
    const user_articles = new User_Articles(req.body);
    user_articles.save()
        .then(data => {
            res.json(data);
        }).catch(err => {
            res.status(500).json({
                msg: err.message
            });
        });
};
//---------------------------------------------------------------------------------------------------------
// Find Multiple User_Articless
exports.findAll = (req, res) => {
    User_Articles.find().sort({ user_articlesId: -1 })
        .then(user_articless => {
            res.json(user_articless);
        }).catch(err => {
            res.status(500).send({
                msg: err.message
            });
        });
};
//-----------------------------------------------------------------------------------------------------------
// FIND one User_Articles
exports.findOne = (req, res) => {
    User_Articles.findById(req.params.user_articlesId)
        .then(user_articles => {
            if (!user_articles) {
                return res.status(404).json({
                    msg: "User_Articles not found with id " + req.params.user_articlesId
                });
            }
            res.json(user_articles);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).json({
                    msg: "User_Articles not found with id " + req.params.user_articlesId
                });
            }
            return res.status(500).json({
                msg: "Error retrieving User_Articles with id " + req.params.user_articlesId
            });
        });
};
//---------------------------------------------------------------------------------------------------------------
// UPDATE User_Articles
exports.update = (req, res) => {
    // Find user_articles and update it
    User_Articles.findByIdAndUpdate(req.body._id, req.body, { new: true })
        .then(user_articles => {
            if (!user_articles) {
                return res.status(404).json({
                    msg: "User_Articles not found with id " + req.params.user_articlesId
                });
            }
            res.json(user_articles);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).json({
                    msg: "User_Articles not found with id " + req.params.user_articlesId
                });
            }
            return res.status(500).json({
                msg: "Error updating user_articles with id " + req.params.user_articlesId
            });
        });
};
//----------------------------------------------------------------------------------------------------------------------
// DELETE User_Articles Record
exports.delete = (req, res) => {
    User_Articles.findByIdAndRemove(req.params.user_articlesId)
        .then(user_articles => {
            if (!user_articles) {
                return res.status(404).json({
                    msg: "User_Articles not found with id " + req.params.user_articlesId
                });
            }
            res.json({ msg: "User_Articles deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).json({
                    msg: "User_Articles not found with id " + req.params.user_articlesId
                });
            }
            return res.status(500).json({
                msg: "Could not delete user_articles with id " + req.params.user_articlesId
            });
        });
};

