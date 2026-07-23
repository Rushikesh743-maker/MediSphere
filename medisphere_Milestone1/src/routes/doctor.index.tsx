import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, Users, Repeat, FlaskConical } from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { appointments, labRequests, weeklyPatientData } from "@/lib/mockData";

export const Route = createFileRoute("/doctor/")({
  component: DoctorDashboard,
});

function DoctorDashboard() {
  const todayAppointments = appointments.length;
  const waiting = appointments.filter((a) => a.status === "Waiting").length;
  const followUps = appointments.filter((a) => a.status === "Follow-up").length;
  const pendingLabs = labRequests.filter((l) => l.status !== "Completed").length;

  const stats = [
    { label: "Today's Appointments", value: todayAppointments, icon: CalendarDays, color: "text-blue-600" },
    { label: "Patients Waiting", value: waiting, icon: Users, color: "text-amber-600" },
    { label: "Follow-up Visits", value: followUps, icon: Repeat, color: "text-green-600" },
    { label: "Pending Lab Requests", value: pendingLabs, icon: FlaskConical, color: "text-purple-600" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold text-slate-900">Dashboard</h1>
        <p className="text-sm text-slate-500">Overview of your day at the clinic.</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-xs text-slate-500">{s.label}</p>
              <s.icon className={`h-5 w-5 ${s.color}`} />
            </div>
            <p className="mt-2 text-2xl font-semibold text-slate-900">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm lg:col-span-2">
          <h2 className="text-sm font-semibold text-slate-800">Patients This Week</h2>
          <div className="h-64 mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyPatientData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="day" stroke="#64748b" fontSize={12} />
                <YAxis stroke="#64748b" fontSize={12} />
                <Tooltip />
                <Bar dataKey="patients" fill="#2563eb" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-slate-800">Upcoming</h2>
            <Link to="/doctor/appointments" className="text-xs text-blue-600 hover:underline">
              View all
            </Link>
          </div>
          <ul className="mt-3 divide-y divide-slate-100">
            {appointments.slice(0, 5).map((a) => (
              <li key={a.id} className="py-2 flex justify-between text-sm">
                <span className="text-slate-800">{a.patientName}</span>
                <span className="text-slate-500">{a.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}