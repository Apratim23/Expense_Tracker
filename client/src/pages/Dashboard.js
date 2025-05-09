import { Grid, Card, CardContent, Typography } from '@mui/material';
import { PieChart, Pie, Cell, Legend } from 'recharts';

const categoryData = [
  { category: 'Food', value: 400 },
  { category: 'Transport', value: 300 },
  { category: 'Entertainment', value: 200 },
  { category: 'Others', value: 100 },
];

const colors = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042'];

const Dashboard = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <Card>
          <CardContent>
            <Typography variant="h5">Total Spent</Typography>
            <Typography variant="h6">$1000</Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Category Pie Chart */}
      <Grid item xs={12} sm={6}>
        <PieChart width={400} height={400}>
          <Pie data={categoryData} dataKey="value" nameKey="category" cx="50%" cy="50%" outerRadius={100}>
            {categoryData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
