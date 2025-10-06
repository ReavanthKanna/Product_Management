import Risk from '../models/riskModel.js';

export const createRisk = async (req, res) => {
  const risk = await Risk.create(req.body);
  res.status(201).json(risk);
};

export const getRisks = async (req, res) => {
  const risks = await Risk.find();
  res.json(risks);
};

export const getRiskById = async (req, res) => {
  const risk = await Risk.findById(req.params.id);
  if (!risk) return res.status(404).json({ message: 'Risk not found' });
  res.json(risk);
};

export const updateRisk = async (req, res) => {
  const risk = await Risk.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!risk) return res.status(404).json({ message: 'Risk not found' });
  res.json(risk);
};

export const deleteRisk = async (req, res) => {
  const risk = await Risk.findByIdAndDelete(req.params.id);
  if (!risk) return res.status(404).json({ message: 'Risk not found' });
  res.json({ message: 'Risk deleted' });
};