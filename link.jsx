module.exports = React.createClass({
	propTypes: {
		className: React.PropTypes.string,
		href: React.PropTypes.string,
		target: React.PropTypes.string,
		onClick: React.PropTypes.func
	},

	handleClick: function(e) {

		// if target is set (e.g. to "_blank"), let the browser handle it
		if (this.props.target || (this.props.href && this.props.href.indexOf('mailto:') === 0)) {
			return;
		}

		// if keyboard click, or not a left click, let the browser handle it
		if (!e.button === 0 || e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) {
			return;
		}

		// otherwise intercept the browser
		e.preventDefault();

		// if a handler was provided, run it
		if (this.props.onClick) {
			this.props.onClick(this.props.href);
		}
	},

	render: function() {
		return (
			<a
				{...this.props}
				href={this.props.href}
				className={`link ${this.props.className}`}
				onClick={this.handleClick}
			/>
		);
	}
});