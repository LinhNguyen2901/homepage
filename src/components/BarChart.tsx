import * as d3 from 'd3';
import { useEffect, useRef } from 'react';

interface BarChartDatum {
  year: string;
  revenue: number;
}

const chartData: BarChartDatum[] = [
  { year: '2019', revenue: 42 },
  { year: '2020', revenue: 58 },
  { year: '2021', revenue: 75 },
  { year: '2022', revenue: 63 },
  { year: '2023', revenue: 91 },
  { year: '2024', revenue: 110 },
];

function BarChart() {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const tooltip = d3.select(tooltipRef.current);
    const margin = { top: 30, right: 30, bottom: 60, left: 60 };
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    svg.selectAll('*').remove();
    tooltip.style('opacity', 0);
    svg
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .attr('viewBox', `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`);

    const chart = svg
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

    const x = d3
      .scaleBand<string>()
      .domain(chartData.map((item) => item.year))
      .range([0, width])
      .padding(0.25);
    const y = d3
      .scaleLinear()
      .domain([0, (d3.max(chartData, (item) => item.revenue) ?? 0) * 1.1])
      .range([height, 0]);

    chart
      .append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(x));

    chart
      .append('g')
      .attr('class', 'y-axis')
      .call(d3.axisLeft(y).ticks(6));

    chart
      .append('text')
      .attr('class', 'axis-label')
      .attr('transform', 'rotate(-90)')
      .attr('x', -height / 2)
      .attr('y', -45)
      .attr('text-anchor', 'middle')
      .text('Revenue ($ millions)');

    chart
      .selectAll('.bar')
      .data(chartData)
      .join('rect')
      .attr('class', 'bar')
      .attr('x', (item) => x(item.year) ?? 0)
      .attr('y', (item) => y(item.revenue))
      .attr('width', x.bandwidth())
      .attr('height', (item) => height - y(item.revenue))
      .attr('fill', '#26428b')
      .on('mouseover', function (event, item) {
        d3.select(this)
          .transition()
          .duration(100)
          .attr('fill', '#782F40');
        tooltip
          .style('opacity', 1)
          .html(`<strong>${item.year}</strong><br/>Revenue: $${item.revenue}M`);
      })
      .on('mousemove', (event) => {
        tooltip
          .style('left', `${event.pageX + 14}px`)
          .style('top', `${event.pageY - 36}px`);
      })
      .on('mouseout', function () {
        d3.select(this)
          .transition()
          .duration(200)
          .attr('fill', '#26428b');
        tooltip.style('opacity', 0);
      });
  }, []);

  return <div className="bar-chart-container"><svg ref={svgRef} className="bar-chart" role="img" aria-label="Revenue bar chart" /><div ref={tooltipRef} className="chart-tooltip" /></div>;
}

export default BarChart;