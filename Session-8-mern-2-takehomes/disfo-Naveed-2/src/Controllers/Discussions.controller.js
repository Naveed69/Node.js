const { response } = require("express");
const { DiscussionService } = require("../Services/Discussion.service");

const newDiscussion = async (req, res) => {
  const body = req.body;
  try {
    const response = await DiscussionService.AddNewDiscussion(body);
    res.status(200).json("Added new discussion", response);
  } catch (err) {
    res
      .status(500)
      .json({ message: "can't add new discussion check author name", err });
  }
};

const getAllDiscussion = async (req, res) => {
  try {
    const response = await DiscussionService.AllDiscussion();
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ message: "No Discussion found", err });
  }
};

const getDiscussionByUser = async (req, res) => {
  const username = req.params.username;
  try {
    const response = await DiscussionService.byUserName(username);
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ message: "No Discussion found", err });
  }
};

const getDiscussionById = async (req, res) => {
  const id = req.query.id;
