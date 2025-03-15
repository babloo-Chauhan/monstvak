
import express from "express";
import { createChandlier, deleteChandlier, getAllChandeliers, getChandlierById, updateChandlier } from "../controllers/chandliers.controllers.js";
const router = express.Router();

// Get all chandeliers
router.get("/chandliers", getAllChandeliers);

// Get chandlier by id
router.get("/chandliers/:id", getChandlierById);    

// Create chandlier
router.post("/chandliers", createChandlier);

// Update chandlier
router.put("/chandliers/:id", updateChandlier);

// Delete chandlier
router.delete("/chandliers/:id", deleteChandlier);





export default router;
