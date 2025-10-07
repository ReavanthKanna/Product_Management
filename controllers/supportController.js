import SupportRequest from '../models/supportModel.js';

export const createRequest = async (req, res) => {
  const request = await SupportRequest.create(req.body);
  res.status(201).json(request);
};

export const getRequests = async (req, res) => {
  const requests = await SupportRequest.find();
  res.json(requests);
};

export const getRequestById = async (req, res) => {
  const request = await SupportRequest.findById(req.params.id);
  if (!request) return res.status(404).json({ message: 'Request not found' });
  res.json(request);
};

export const updateRequest = async (req, res) => {
  const request = await SupportRequest.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!request) return res.status(404).json({ message: 'Request not found' });
  res.json(request);
};

export const deleteRequest = async (req, res) => {
  const request = await SupportRequest.findByIdAndDelete(req.params.id);
  if (!request) return res.status(404).json({ message: 'Request not found' });
  res.json({ message: 'Request deleted' });
};