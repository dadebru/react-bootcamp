import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class CampsiteInfo extends Component {
	renderCampsite(campsite) {
		return (
			<div className='col-md-5 m-1'>
				<Card onClick={() => this.onCampsiteSelect(campsite)}>
					<CardImg
						width='100%'
						src={campsite.image}
						alt={campsite.name}
					/>
					<CardBody>
						<CardTitle>{campsite.name}</CardTitle>
						<CardText>{campsite.description}</CardText>
					</CardBody>
				</Card>
			</div>
		);
	}

	renderComments(comments) {
		if (comments) {
			return (
				<div className='col-md-5 m-1'>
					<h4>Comments:</h4>
					{comments.map((comment) => {
						return (
							<div>
								<h4>
									{comment.text}
									{new Intl.DateTimeFormat('en-US', {
										year: 'numeric',
										month: 'short',
										day: '2-digit',
									}).format(
										new Date(Date.parse(comment.date))
									)}
								</h4>
								<div>{comment.author}</div>
							</div>
						);
					})}
				</div>
			);
		}
		return <div />;
	}

	render() {
		const campsite = this.props.campsite;
		const comments = this.props.comments;

		if (campsite) {
			return (
				<div className='container'>
					<div className='row'>
						{this.renderCampsite(campsite)}
						{this.renderComments(comments)}
					</div>
				</div>
			);
		} else {
			return <div></div>;
		}
	}
}

export default CampsiteInfo;
