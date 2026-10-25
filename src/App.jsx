import { FLEET_DATA } from './data';
// יש לייבא לכאן את הרכיבים מתיקיית components

export default function App() {
  const fleet = FLEET_DATA;
  const activeDroneId = "DRN-101";

  const handleLaunch = (droneId) => {
    alert(`[LAUNCH PROTOCOL] Drone ${droneId} deployed.`);
  };

  const handleEmergencyRecall = (droneId) => {
    alert(`[EMERGENCY RECALL] Drone ${droneId} returning to base.`);
  };

  const selectedDrone = fleet.find((d) => d.id === activeDroneId);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-8 font-mono">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="border-b border-cyan-800 pb-4">
          <h1 className="text-2xl font-bold tracking-wider text-cyan-400">
            FLEET COMMAND CONSOLE
          </h1>
          <p className="text-sm text-slate-400 mt-1">Autonomous Drone Fleet Management Interface</p>
        </header>

        {/* ========================================================
            אזור עבודת התלמידים: שילוב הרכיבים שנבנו
            1. FleetList
            2. DroneDetails
            3. ActionsPanel
           ======================================================== */}
        <main className="space-y-6">
          <p className="text-amber-400 text-sm">
            System ready. Connect components in App.jsx.
          </p>
        </main>
      </div>
    </div>
  );
}