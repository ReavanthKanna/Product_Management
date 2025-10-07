import ChangeRequest from '../models/changeModel.js';

export const createChange = async (req, res) => {
  const change = await ChangeRequest.create(req.body);
  res.status(201).json(change);
};

export const getChanges = async (req, res) => {
  const changes = await ChangeRequest.find();
  res.json(changes);
};

export const getChangeById = async (req, res) => {
  const change = await ChangeRequest.findById(req.params.id);
  if (!change) return res.status(404).json({ message: 'Change request not found' });
  res.json(change);
};

export const updateChange = async (req, res) => {
  const change = await ChangeRequest.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!change) return res.status(404).json({ message: 'Change request not found' });
  res.json(change);
};

export const deleteChange = async (req, res) => {
  const change = await ChangeRequest.findByIdAndDelete(req.params.id);
  if (!change) return res.status(404).json({ message: 'Change request not found' });
  res.json({ message: 'Change request deleted' });
};