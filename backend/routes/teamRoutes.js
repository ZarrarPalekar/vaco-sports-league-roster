import express from "express";
import asyncHandler from "express-async-handler";
const router = express.Router();
import Team from "../models/teamsModel.js";
import TeamMember from "../models/teamMembersModel.js";

// @desc Fetch all teams
// @route GET /api/teams
// @access Public
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const teams = await Team.find({});
    res.json(teams);
  })
);

// @desc Fetch team by id
// @route GET /api/teams/:id
// @access Public
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    //   const team = teams.find((team) => team._id === req.params.id);

    const team = await Team.findById(req.params.id);
    if (team) {
      res.json(team);
    } else {
      res.status(404);
      throw new Error("Team not found");
    }
  })
);

// @desc Fetch teamMembers by team
// @route GET /api/teams/team/:teamName
// @access Public
router.get(
  "/team/:teamName",
  asyncHandler(async (req, res) => {
    //   const specificTeamMembers = teamMembers.filter(
    //     (specific) => specific.team === req.params.teamName
    //   );

    const specificTeamMembers = await TeamMember.find({
      team: req.params.teamName,
    });
    res.json(specificTeamMembers);
  })
);

// @desc Delete teamMembers by id
// @route DELETE /api/teams/delete/:id
// @access Public
router.delete(
  "/delete/:id",
  asyncHandler(async (req, res) => {
    const teamMember = await TeamMember.findById(req.params.id);

    if (teamMember) {
      await teamMember.remove();
      res.json({
        message: `${teamMember.firstName} team member is now removed`,
      });
    } else {
      res.status(404);
      throw new Error("Team member not found");
    }
  })
);

// @desc Add teamMembers
// @route ADD /api/teams/add/teamMember
// @access Public
router.post(
  "/add/teamMember",
  asyncHandler(async (req, res) => {
    const { team, fName, lName } = req.body;
    const teamMember = await TeamMember.findOne({
      team,
      firstName: fName,
      lastName: lName,
    });

    if (teamMember) {
      res.status(400);
      throw new Error("Team member already exists");
    }

    await TeamMember.create({ team, firstName: fName, lastName: lName });
    res.status(201).json({ message: "Team Member Added Successfully" });
  })
);

// @desc Add teamMembers
// @route ADD /api/teams/add/team
// @access Public
router.post(
  "/add/team",
  asyncHandler(async (req, res) => {
    const { team, short, image } = req.body;
    const teamName = await Team.findOne({ name: team });

    if (teamName) {
      res.status(400);
      throw new Error("Team already exists");
    }

    await Team.create({ name: team, short, image });
    res.status(201).json({ message: "Team Added Successfully" });
  })
);

// @desc Delete teamMembers by id
// @route DELETE /api/teams/delete/team/:id
// @access Public
router.delete(
  "/delete/team/:id",
  asyncHandler(async (req, res) => {
    const team = await Team.findById(req.params.id);

    if (team) {
      await team.remove();
      res.json({
        message: `${team.name} team is now removed`,
      });
    } else {
      res.status(404);
      throw new Error("Team member not found");
    }
  })
);

export default router;
