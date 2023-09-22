import db from "../../v1/database/models/index";

const roleController = {};

roleController.getListRole = async (req, res) => {
  try {
    const roles = await db.Role.findAll();
    if (!roles) {
      return res.status(404).json({
        errCode: 0,
        message: "Not found",
      });
    }

    return res.status(200).json({
      errCode: 1,
      message: "OK",
      data: {
        limit: roles.length,
        roles: roles,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

roleController.getRoleById = async (req, res) => {};

roleController.createRole = async (req, res) => {
  const { name, description } = req.body;

  if (!name || !description) {
    return res.status(500).json({
      errCode: -1,
      message: "Missing inputs",
    });
  }
  try {
    const checkRole = await db.Role.findOne({ where: { name: name } });
    if (checkRole) {
      return res.status(200).json({
        errCode: 1,
        message: "Role is already exist.",
      });
    }

    const roles = await db.Role.create({
      name: name,
      description: description,
    });

    return res.status(201).json({
      errCode: 1,
      message: "Create new role success",
      data: roles,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      errCode: -1,
      message: "Something with wrong",
    });
  }
};

roleController.updateRole = async (req, res) => {};

roleController.deleteRole = async (req, res) => {};

export default roleController;
