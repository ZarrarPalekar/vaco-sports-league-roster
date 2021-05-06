import express from "express";
import asyncHandler from "express-async-handler";
const router = express.Router();
import TeamMember from "../models/teamMembersModel.js";

// @desc Fetch all teamMembers
// @route GET /api/teamMembers
// @access Public
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const teamMembers = await TeamMember.find({});
    res.json(teamMembers);
  })
);

export default router;
