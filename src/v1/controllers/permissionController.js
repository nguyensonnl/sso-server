import db from "../database/models";

const permissionController = {};

export default permissionController;

permissionController.getListPermission = async (req, res) => {
  try {
    const permissions = await db.Permission.findAll();

    if (!permissions || permissions.length === 0) {
      return res.status(404).json({
        errCode: 0,
        message: "Not yet list permission has created.",
      });
    }
    return res.status(200).json({
      errCode: 1,
      message: "Get list permission success.",
      data: {
        limit: permissions.length,
        permissions,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      errCode: -1,
      message: "Something with wrong",
    });
  }
};

permissionController.getPermissionById = async (req, res) => {};

permissionController.createPermission = async (req, res) => {
  const { url, description } = req.body;

  if (!url) {
    return res.status(404).json({
      errCode: 0,
      message: "Missing inputs",
    });
  }

  try {
    const checkPermission = await db.Permission.findOne({
      where: { url: url },
    });
    if (checkPermission) {
      return res.status(200).json({
        errCode: 1,
        message: "Already exist this permission",
      });
    }
    const permission = await db.Permission.create({
      url,
      description,
    });
    return res.status(201).json({
      errCode: 1,
      message: "Create a permission success",
      data: permission,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      errCode: -1,
      message: "Something with wrong",
    });
  }
};

permissionController.updatePermission = async (req, res) => {};

permissionController.deletePermission = async (req, res) => {};
