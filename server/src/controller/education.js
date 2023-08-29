import Record from "../model/education.js"; // Update the path to your model

// Controller functions
const createRecord = async (req, res) => {
    try {
        const record = new Record(req.body);
        const savedRecord = await record.save();
        res.status(201).json(savedRecord);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getRecords = async (req, res) => {
    try {
        const records = await Record.find();
        res.status(200).json(records);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getRecordById = async (req, res) => {
    try {
        const record = await Record.findById(req.params.id);
        if (record) {
            res.status(200).json(record);
        } else {
            res.status(404).json({ message: "Record not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateRecord = async (req, res) => {
    try {
        const record = await Record.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (record) {
            res.status(200).json(record);
        } else {
            res.status(404).json({ message: "Record not found" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteRecord = async (req, res) => {
    try {
        const record = await Record.findByIdAndDelete(req.params.id);
        if (record) {
            res.status(200).json({ message: "Record deleted successfully" });
        } else {
            res.status(404).json({ message: "Record not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export { createRecord, getRecords, getRecordById, updateRecord, deleteRecord };
