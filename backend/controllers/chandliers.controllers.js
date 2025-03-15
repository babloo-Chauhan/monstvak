import Chandeliers from '../models/Chandliers.Model.js'

export const getAllChandeliers = async (req, res) => {
    try {
        const chandeliers = await Chandeliers.find();
        res.status(200).json(chandeliers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getChandlierById = async (req, res) => {
  try {
    const chandlier = await Chandeliers.findById(req.params.id);
    res.status(200).json(chandlier);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createChandlier = async (req, res) => {
    const chandlier = req.body;
    const newChandlier = new Chandeliers(chandlier);
    try {
        await newChandlier.save();
        res.status(201).json(newChandlier);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
    };

export const updateChandlier = async (req, res) => {
    const { id: _id } = req.params;
    const chandlier = req.body;
    try {
        const updatedChandlier = await Chandeliers.findByIdAndUpdate(_id, { ...chandlier, _id }, { new: true });
        res.status(200).json(updatedChandlier);
        
    } catch (error) {
        res.status(500).json({ message: error.message });
        
    }



};

export const deleteChandlier = async (req, res) => {
    const { id : _id} = req.params;
    try {
        await Chandeliers.findByIdAndDelete(_id);
        res.status(200).json({ message: 'Chandelier deleted successfully.' });


    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    
  
}

export default {getAllChandeliers, getChandlierById, createChandlier, updateChandlier, deleteChandlier}







