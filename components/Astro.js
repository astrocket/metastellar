import React, {Component} from 'react';
import {Modal, Button, Icon, Header} from 'semantic-ui-react';
import {MetaID} from "./index";

const Astro = ({astro, modalOpen, handleOpen, handleClose, metaID}) => {
  return (
      <Modal
          open={modalOpen}
          onClose={handleClose}
          basic
          size='small'
      >
        <Header icon='id badge' content='Become a owner of this star.'/>
        <Modal.Content>
          <p>
            {`Do you like star #${astro.target.name} ?`}<br/>
            {`Buy now and put your identity on constellation using MetaID.`} <a href='https://metadium.com' target="_blank">(What is MetaID?)</a><br/>
            {`You can put your name on it.`}
          </p>
          <MetaID metaID={metaID} />
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={handleClose} inverted>
            <Icon name='checkmark'/> Open Metamask & Buy this star.
          </Button>
        </Modal.Actions>
      </Modal>
  );
};

export {Astro}