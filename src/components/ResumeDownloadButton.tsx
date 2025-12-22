'use client';

import { PDFDownloadLink } from "@react-pdf/renderer";
import { ResumeDocument } from "@/components/ResumePDF";
import { ArrowDownToLine } from 'lucide-react';
import { motion } from "framer-motion";

export default function ResumeDownloadButton() {
    return (
        <PDFDownloadLink document={<ResumeDocument />} fileName="Salah_Yakoup_CV.pdf">
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-8 py-4 bg-slate-900 text-slate-300 border border-slate-700 rounded-full font-semibold hover:bg-slate-800 hover:text-white transition-all hover:border-slate-600"
            >
                Download Resume
                <ArrowDownToLine className="w-4 h-4" />
            </motion.button>
        </PDFDownloadLink>
    );
}
