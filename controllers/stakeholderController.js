import Stakeholder from '../models/stakeholderModel.js';

export const createStakeholder = async (req, res) => {
  const stakeholder = await Stakeholder.create(req.body);
  res.status(201).json(stakeholder);
};

export const getStakeholders = async (req, res) => {
  const stakeholders = await Stakeholder.find();
  res.json(stakeholders);
};

export const getStakeholderById = async (req, res) => {
  const stakeholder = await Stakeholder.findById(req.params.id);
  if (!stakeholder) return res.status(404).json({ message: 'Stakeholder not found' });
  res.json(stakeholder);
};

export const updateStakeholder = async (req, res) => {
  const stakeholder = await Stakeholder.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!stakeholder) return res.status(404).json({ message: 'Stakeholder not found' });
  res.json(stakeholder);
};

export const deleteStakeholder = async (req, res) => {
  const stakeholder = await Stakeholder.findByIdAndDelete(req.params.id);
  if (!stakeholder) return res.status(404).json({ message: 'Stakeholder not found' });
  res.json({ message: 'Stakeholder deleted' });
};