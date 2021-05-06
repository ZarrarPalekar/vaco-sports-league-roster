import mongoose from "mongoose";

const teamMemberSchema = mongoose.Schema(
  {
    team: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const TeamMember = mongoose.model("TeamMember", teamMemberSchema);

export default TeamMember;
