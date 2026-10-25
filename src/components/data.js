export const FLEET_DATA = [
  {
    id: "DRN-101",
    model: "Phantom-X",
    battery: 18,
    status: "CRITICAL",
    shieldActive: true,
    modules: ["Scanner v2", "EMP Blaster"],
    coordinates: { sector: "Sector-7", x: 104, y: 88 }
  },
  {
    id: "DRN-204",
    model: "Viper-Heavy",
    battery: 85,
    status: "ONLINE",
    shieldActive: false,
    modules: [],
    coordinates: { sector: "Sector-3", x: 42, y: 19 }
  },
  {
    id: "DRN-309",
    model: "Ghost-Recon",
    battery: 45,
    status: "STANDBY",
    shieldActive: true,
    modules: ["Stealth Cloak", "Thermal Radar", "Sub-space Link"],
    coordinates: { sector: "Sector-9", x: 210, y: 14 }
  }
];