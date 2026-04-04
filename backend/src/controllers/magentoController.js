import {
    getMagentoRecords,
    getMagentoRecord,
    createMagentoRecord,
    updateMagentoRecord,
    deleteMagentoRecord
} from '../services/magento.js';

export const getMagentos = async (req, res) => {
    try {
        const magentos = await getMagentoRecords()
        res.json(magentos);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

export const getMagento = async (req, res) => {
    const id = Number(req.params.id);
    if (isNaN(id)) {
        return res.status(404).json({error: `Non-numeric value: ${id}`});
    }

    try {
        const magento = await getMagentoRecord(id)
        if (magento == null) {
            return res.status(404).json({ error: 'Magento not found' });
        }
        res.json(magento);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

export const createMagento = async (req, res) => {
    try {
        const magento = await createMagentoRecord(req.body);
        res.status(201).json(magento);
    } catch (err) {
        // Unique constraint violation
        if (err.code === 'P2002') {
            res.status(409).json({ error: err });
        } else {
            res.status(500).json({ error: err });
        }
    }
};

export const updateMagento = async (req, res) => {
    const id = Number(req.params.id);
    if (isNaN(id)) {
        return res.status(404).json({error: `Non-numeric value: ${id}`});
    }

    try {
        const magento = await updateMagentoRecord(id, req.body);
        res.json(magento);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

export const deleteMagento = async (req, res) => {
    const id = Number(req.params.id);
    if (isNaN(id)) {
        return res.status(404).json({error: `Non-numeric value: ${id}`});
    }

    try {
        await deleteMagentoRecord(id);
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err });
    }
};
