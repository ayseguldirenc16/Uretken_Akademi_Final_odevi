import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const EAEEBarChart = ({ data }) => {
  return (
    <ResponsiveContainer width="70%" height={300} >
      <BarChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="BELEDIYE_ADI" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="MIKTAR_KG" fill="#005f70" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default EAEEBarChart;
