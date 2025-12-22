"use client";

import React from 'react';
import { Page, Text, View, Document, StyleSheet, Link, Font } from '@react-pdf/renderer';

// Register standard fonts
Font.register({
    family: 'Helvetica',
    fonts: [
        { src: 'https://fonts.gstatic.com/s/helveticaneue/5.13.0/HelveticaNeue-Regular.ttf' },
        { src: 'https://fonts.gstatic.com/s/helveticaneue/5.13.0/HelveticaNeue-Bold.ttf', fontWeight: 'bold' },
        { src: 'https://fonts.gstatic.com/s/helveticaneue/5.13.0/HelveticaNeue-Italic.ttf', fontStyle: 'italic' }
    ]
});

// --- STYLES (Modern 2-Column Layout) ---
const styles = StyleSheet.create({
    page: { flexDirection: 'row', backgroundColor: '#FFFFFF', fontFamily: 'Helvetica' },

    // Left Sidebar (35% width)
    sidebar: { width: '35%', backgroundColor: '#F3F4F6', padding: 20, borderRightWidth: 1, borderRightColor: '#E5E7EB' },

    // Right Content (65% width)
    main: { width: '65%', padding: 30 },

    // Typography
    name: { fontSize: 22, fontWeight: 'bold', color: '#111827', marginBottom: 4, textTransform: 'uppercase' },
    role: { fontSize: 10, color: '#10B981', fontWeight: 'bold', marginBottom: 20, textTransform: 'uppercase' },

    sectionTitle: { fontSize: 10, fontWeight: 'bold', color: '#111827', textTransform: 'uppercase', marginBottom: 10, borderBottomWidth: 1, borderBottomColor: '#D1D5DB', paddingBottom: 4 },

    // Content Items
    h3: { fontSize: 10, fontWeight: 'bold', color: '#374151', marginBottom: 2 },
    h4: { fontSize: 9, color: '#4B5563', marginBottom: 2, fontStyle: 'italic' },
    date: { fontSize: 8, color: '#6B7280', marginBottom: 4 },
    text: { fontSize: 9, color: '#4B5563', lineHeight: 1.4, marginBottom: 4 },
    bullet: { fontSize: 9, color: '#4B5563', lineHeight: 1.4, marginBottom: 2, paddingLeft: 5 },

    // Contact Info
    contactItem: { fontSize: 9, color: '#4B5563', marginBottom: 4 },
    link: { color: '#10B981', textDecoration: 'none' },

    // Skill Tags
    skillRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 4, marginBottom: 10 },
    skillTag: { fontSize: 8, backgroundColor: '#E5E7EB', color: '#374151', paddingHorizontal: 6, paddingVertical: 3, borderRadius: 4 },

    // Cert Badges (Text based)
    certItem: { marginBottom: 6 },
    certTitle: { fontSize: 9, fontWeight: 'bold', color: '#374151' },
    certDate: { fontSize: 8, color: '#6B7280' },
    tierLabel: { fontSize: 7, color: '#10B981', textTransform: 'uppercase', marginBottom: 1 }
});

// --- DATA CONSTANTS ---
const SKILLS = [
    "TMMi Level 5 Governance", "Test Automation (Playwright)", "Python & AI Agents",
    "Cybersecurity (Burp Suite)", "SHAP/LIME AI Ethics", "DevSecOps (Azure)",
    "ISO 9001 Auditing", "PKI & Cryptography"
];

export const ResumeDocument = () => (
    <Document>
        <Page size="A4" style={styles.page}>

            {/* === LEFT COLUMN (SIDEBAR) === */}
            <View style={styles.sidebar}>

                {/* CONTACT */}
                <View style={{ marginBottom: 25 }}>
                    <Text style={styles.sectionTitle}>Contact</Text>
                    <Text style={styles.contactItem}>Ottawa, Ontario, Canada</Text>
                    <Text style={styles.contactItem}>alhoulsy@gmail.com</Text>
                    <Link src="https://linkedin.com/in/salah-abualhoul" style={styles.contactItem}>linkedin.com/in/salah-abualhoul</Link>
                    <Link src="https://github.com/alhoulsy0" style={styles.contactItem}>github.com/alhoulsy0</Link>
                </View>

                {/* EDUCATION */}
                <View style={{ marginBottom: 25 }}>
                    <Text style={styles.sectionTitle}>Education</Text>

                    <View style={{ marginBottom: 10 }}>
                        <Text style={styles.h3}>M.Sc. Informatics</Text>
                        <Text style={styles.h4}>University Sultan Zainal Abidin</Text>
                        <Text style={styles.date}>2023 — 2025 | Malaysia</Text>
                        <Text style={{ fontSize: 8, color: '#4B5563' }}>Thesis: Priority-Based Software Quality Framework using AHP.</Text>
                    </View>

                    <View style={{ marginBottom: 10 }}>
                        <Text style={styles.h3}>PG: AI Software Dev</Text>
                        <Text style={styles.h4}>Algonquin College</Text>
                        <Text style={styles.date}>2025 — Present | Ottawa</Text>
                    </View>

                    <View style={{ marginBottom: 10 }}>
                        <Text style={styles.h3}>PG: Cybersecurity Analysis</Text>
                        <Text style={styles.h4}>Algonquin College (Honors)</Text>
                        <Text style={styles.date}>2024 — 2025 | Ottawa</Text>
                    </View>

                    <View style={{ marginBottom: 10 }}>
                        <Text style={styles.h3}>B.Eng Telecommunications</Text>
                        <Text style={styles.h4}>Yarmouk University</Text>
                        <Text style={styles.date}>2012 | Jordan</Text>
                    </View>
                </View>

                {/* CERTIFICATION VAULT */}
                <View style={{ marginBottom: 25 }}>
                    <Text style={styles.sectionTitle}>Certifications</Text>

                    {/* Tier 1 */}
                    <View style={styles.certItem}>
                        <Text style={styles.tierLabel}>Elite Governance</Text>
                        <Text style={styles.certTitle}>TMMi Accredited Assessor</Text>
                        <Text style={styles.certDate}>Sep 2020 (Global Elite)</Text>
                    </View>
                    <View style={styles.certItem}>
                        <Text style={styles.certTitle}>TMMi Test Process Improver</Text>
                        <Text style={styles.certDate}>Dec 2023</Text>
                    </View>
                    <View style={styles.certItem}>
                        <Text style={styles.certTitle}>ISO 9001:2015 General</Text>
                        <Text style={styles.certDate}>Jun 2014</Text>
                    </View>

                    {/* Tier 2 */}
                    <View style={[styles.certItem, { marginTop: 6 }]}>
                        <Text style={styles.tierLabel}>Engineering (ISTQB)</Text>
                        <Text style={styles.certTitle}>Advanced Test Manager</Text>
                        <Text style={styles.certDate}>Mar 2018</Text>
                    </View>
                    <View style={styles.certItem}>
                        <Text style={styles.certTitle}>Advanced Test Analyst</Text>
                        <Text style={styles.certDate}>Apr 2017</Text>
                    </View>

                    {/* Tier 3 */}
                    <View style={[styles.certItem, { marginTop: 6 }]}>
                        <Text style={styles.tierLabel}>Agile & Ops</Text>
                        <Text style={styles.certTitle}>PSM I (Scrum Master)</Text>
                        <Text style={styles.certDate}>Jul 2019</Text>
                    </View>
                    <View style={styles.certItem}>
                        <Text style={styles.certTitle}>ITIL v4 Foundation</Text>
                        <Text style={styles.certDate}>Dec 2019</Text>
                    </View>
                </View>

                {/* CORE COMPETENCIES */}
                <View>
                    <Text style={styles.sectionTitle}>Expertise</Text>
                    <View style={styles.skillRow}>
                        {SKILLS.map((skill, i) => (
                            <Text key={i} style={styles.skillTag}>{skill}</Text>
                        ))}
                    </View>
                </View>
            </View>

            {/* === RIGHT COLUMN (MAIN CONTENT) === */}
            <View style={styles.main}>

                {/* HEADER */}
                <View style={{ marginBottom: 20 }}>
                    <Text style={styles.name}>Salah Yakoup</Text>
                    <Text style={styles.role}>Full Stack AI & Security Architect</Text>
                    <Text style={styles.text}>
                        Expert Engineer bridging the gap between Generative AI innovation and Enterprise-Grade Security.
                        Proven track record of leading TMMi Level 5 transformations and architecting secure, autonomous AI systems for national infrastructure.
                    </Text>
                </View>

                {/* EXPERIENCE TIMELINE */}
                <View style={{ marginBottom: 20 }}>
                    <Text style={styles.sectionTitle}>Professional Experience</Text>

                    {/* Jodayn */}
                    <View style={{ marginBottom: 15 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 2 }}>
                            <Text style={styles.h3}>Principal Consultant & AI Engineer</Text>
                            <Text style={styles.date}>2016 — 2025</Text>
                        </View>
                        <Text style={styles.h4}>Jodayn for IT (Riyadh, KSA)</Text>
                        <Text style={styles.bullet}>• <Text style={{ fontWeight: 'bold' }}>Government Transformation:</Text> Led TMMi Level 5 Quality Maturity initiatives for ZATCA (Tax Authority) and Saudi Post (SPL).</Text>
                        <Text style={styles.bullet}>• <Text style={{ fontWeight: 'bold' }}>AI Integrity:</Text> Engineered "Fairness Frameworks" using SHAP & LIME to audit AI decision models.</Text>
                        <Text style={styles.bullet}>• <Text style={{ fontWeight: 'bold' }}>Fintech Security:</Text> Designed PKI/TLS architectures for secure digital document transmission.</Text>
                        <Text style={styles.bullet}>• <Text style={{ fontWeight: 'bold' }}>Red Teaming:</Text> Conducted offensive security audits (Burp Suite) on critical REST APIs.</Text>
                    </View>

                    {/* CUBIC */}
                    <View style={{ marginBottom: 15 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 2 }}>
                            <Text style={styles.h3}>Senior Software Quality Engineer</Text>
                            <Text style={styles.date}>2015 — 2016</Text>
                        </View>
                        <Text style={styles.h4}>CUBIC Arts Tech (Amman)</Text>
                        <Text style={styles.bullet}>• Achieved 100% WCAG Accessibility Compliance for government portals.</Text>
                        <Text style={styles.bullet}>• Optimized performance for high-traffic enterprise web architectures.</Text>
                    </View>

                    {/* LG */}
                    <View style={{ marginBottom: 15 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 2 }}>
                            <Text style={styles.h3}>Automation Engineer (R&D)</Text>
                            <Text style={styles.date}>2012 — 2015</Text>
                        </View>
                        <Text style={styles.h4}>LG Electronics (EMEA Region)</Text>
                        <Text style={styles.bullet}>• <Text style={{ fontWeight: 'bold' }}>Google Partnership:</Text> Managed the Nexus 5 strategic engineering bridge with Google HQ.</Text>
                        <Text style={styles.bullet}>• <Text style={{ fontWeight: 'bold' }}>Global Scale:</Text> Led carrier certification protocols across the entire EMEA region.</Text>
                    </View>
                </View>

                {/* KEY PROJECTS */}
                <View>
                    <Text style={styles.sectionTitle}>Selected Projects</Text>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
                        <View style={{ width: '48%' }}>
                            <Text style={{ fontSize: 9, fontWeight: 'bold', color: '#10B981' }}>ZATCA National Tax System</Text>
                            <Text style={{ fontSize: 8, color: '#4B5563' }}>Commanded zero-error launch of KSA national tax platform.</Text>
                        </View>
                        <View style={{ width: '48%' }}>
                            <Text style={{ fontSize: 9, fontWeight: 'bold', color: '#10B981' }}>SFDA Digital Health</Text>
                            <Text style={{ fontSize: 8, color: '#4B5563' }}>Defined National Usability Standards (CHI) for health services.</Text>
                        </View>
                        <View style={{ width: '48%', marginTop: 6 }}>
                            <Text style={{ fontSize: 9, fontWeight: 'bold', color: '#10B981' }}>Logrus Global Gaming</Text>
                            <Text style={{ fontSize: 8, color: '#4B5563' }}>Managed localization testing for major gaming titles.</Text>
                        </View>
                        <View style={{ width: '48%', marginTop: 6 }}>
                            <Text style={{ fontSize: 9, fontWeight: 'bold', color: '#10B981' }}>Ministry of Foreign Affairs</Text>
                            <Text style={{ fontSize: 8, color: '#4B5563' }}>Secured high-availability diplomatic networks.</Text>
                        </View>
                    </View>
                </View>

            </View>
        </Page>
    </Document>
);
