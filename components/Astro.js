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
          <MetaID
              metaID={metaID}
              starImage={`http://server7.sky-map.org/imgcut?survey=DSS2&w=128&h=128&ra=${astro.ra.decimal}&de=${astro.dec.decimal}&angle=1.25&output=PNG`}
              starUrl={`http://server1.wikisky.org/v2?ra="+(${astro.ra.decimal}/15)+"&de="+(${astro.dec.decimal})+"&zoom=6&img_source=DSS2`}
          />
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