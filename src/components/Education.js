import {
  Heading,
  Button,
  toast
} from '@chakra-ui/react';
import React, { Component } from 'react';
import config from '../../config';
import Wrapper from './Wrapper';

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      educationData: config.education
    };
  }

  handleSave = () => {
    const formattedData = this.state.educationData.map(item => ({
      ...item,
      place: item.place.trim(),
      title: item.title.trim(),
      period: item.period.trim()
    }));

    // Update config with formatted data
    config.education = formattedData;
    
    // Show success toast
    toast({
      title: 'Success',
      description: 'Education data has been formatted and saved successfully',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });

    this.setState({
      isEditing: false,
      educationData: formattedData
    });
  }

  render() {
    return (
      <Wrapper id="education">
        <div className="w-100">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <Heading p={10}>Education</Heading>
            <Button onClick={this.handleSave} colorScheme="blue">
              Save & Format
            </Button>
          </div>

          {this.state.educationData.map((education) => {
            const { place, url, title, period } = education;
            return (
              <div
                key={url}
                className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5"
              >
                <div className="resume-content">
                  <h3 className="mb-0">{place}</h3>
                  <div className="subheading mb-3">
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      {title}
                    </a>
                  </div>
                </div>
                <div className="resume-date text-md-right">
                  <span className="badge badge-secondary">{period}</span>
                </div>
              </div>
            );
          })}
        </div>
      </Wrapper>
    );
  }
}

export default Education;
