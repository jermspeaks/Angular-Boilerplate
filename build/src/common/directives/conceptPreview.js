'use strict';

// Multi series bar chart
module.exports = function($log) {
	return {
		restrict: 'E',
		scope: {
			conceptData: '='
		},
		replace: true,
		transclude: false,
		template: '<div class="concept-data-viz"></div>',
		controller: function($scope, $element) {
			$log.debug('Loaded Concept Preview');
			$log.debug($scope.conceptData);

			function renderChart() {
				// Attributes
				var margin = {top: 20, right: 120, bottom: 20, left: 120},
					w = $($element).width() - margin.right - margin.left,
					h = 500 - margin.top - margin.bottom;

				// Define Tree & root
				var treeData = {
					name: 'Name of Concept',
					contents: [{
						name: 'Forms',
						contents: [{
							name: 'Example 1'
						}, {
							name: 'Example 2'
						}]
					}, {
						name: 'Related Concepts',
						contents: []
					}, {
						name: 'Form to Concept Link',
						contents: [{
							name: 'Example 1',
						}, {
							name: 'Example 2'
						}]
					}]
				};

				var options = {
					nodeRadius: 5
				};

				var tree = d3.layout.tree()
					.sort(null)
					.size([w, h - 200])
					.children(function(d) {
						return (!d.contents || d.contents.length === 0) ? null : d.contents;
					});

				var nodes = tree.nodes(treeData);
				var links = tree.links(nodes);

				/*
				    <svg>
				        <g class="container" />
				    </svg>
				*/

				// SVG Element
				var svg = d3.select('.concept-data-viz')
					.append('svg:svg')
					.attr('width', w)
					.attr('height', h)
					.append("svg:g")
					.attr("class", "container")
					.attr("transform", "translate(0,10)");
					// .append('g').attr('class', 'links')
					// .append('g').attr('class', 'nodes');

				// Edges between nodes as a <path class="link" />
				var link = d3.svg.diagonal()
					.projection(function(d) {
						return [d.x, d.y];
					});

				svg.selectAll("path.link")
					.data(links)
					.enter()
					.append("svg:path")
					.attr("class", "link")
					.attr("d", link);


				/*
				    Nodes as
				    <g class="node">
				        <circle class="node-dot" />
				        <text />
				    </g>
				 */
				var nodeGroup = svg.selectAll("g.node")
					.data(nodes)
					.enter()
					.append("svg:g")
					.attr("class", "node")
					.attr("transform", function(d) {
						return "translate(" + d.x + "," + d.y + ")";
					});

				nodeGroup.append("svg:circle")
					.attr("class", "node-dot")
					.attr("r", options.nodeRadius);

				nodeGroup.append("svg:text")
					.attr("text-anchor", function(d) {
						return d.children ? "end" : "start";
					})
					.attr("dx", function(d) {
						var gap = 2 * options.nodeRadius;
						return d.children ? -gap : gap;
					})
					.attr("dy", 3)
					.text(function(d) {
						return d.name;
					});

				// var nodes = graph.nodes,
				//     links = graph.links;
				//
				// // Force Layout Object
				// var force = d3.layout.force()
				// 	.size([w, h])
				// 	.nodes(nodes)
				// 	.links(links)
				// 	.linkDistance(w / 3.05);
				//
				// // d3 Node & Link
				// var link = svg.selectAll('.link')
				// 	.data(links)
				// 	.enter().append('line')
				// 	.attr('class', 'link');
				//
				// var node = svg.selectAll('.node')
				// 	.data(nodes)
				// 	.enter().append('circle')
				// 	.attr('class', 'node');
			}

			// TODO
			// function updateChart() {
			//
			// }

			// Event listener to see any changes to concept data
			$scope.$watch('conceptData', function() {
				if ($scope.conceptData) {
					renderChart();
				}
			});
		}
	};
};
