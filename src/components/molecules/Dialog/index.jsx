import React, { useState, useEffect, useRef } from 'react';
import { bool, string, func, arrayOf, node } from 'prop-types';
import { uniqueId } from 'lodash';
import { Typography } from '../../atoms/Typography';
import { Button } from '../../atoms/Button';
import { CircleButton } from '../../atoms/CircleButton';
import { Row } from '../../atoms/Row';
import { Col } from '../../atoms/Col';
import StyledModal from './StyledDialog';
import { DialogHeader } from './DialogHeader';
import { DialogContent } from './DialogContent';
import { DialogFooter } from './DialogFooter';
import { DialogBox } from './DialogBox';
import { DialogBackground } from './DialogBackground';

export const Dialog = ({
  openDialog,
  type,
  id,
  onClickConfirm,
  onClickClose,
  message,
  title,
  children,
}) => {
  const background = useRef(null);
  const [fadeType, setFadeType] = useState('out');

  const onEscKeyDown = (e) => {
    if (e.key !== 'Escape') return;
    onClickClose();
    setFadeType('out');
  };

  useEffect(() => {
    window.addEventListener('keydown', onEscKeyDown, false);

    return window.removeEventListener('keydown', onEscKeyDown, false);
  }, []);

  useEffect(() => {
    setFadeType(openDialog ? 'in' : 'out');
  }, [openDialog]);

  const handleClick = (e) => {
    e.preventDefault();
    onClickClose();
    setFadeType('out');
  };

  const handleClickConfirm = (e) => {
    e.preventDefault();
    onClickConfirm();
    onClickClose();
    setFadeType('out');
  };

  const renderActionConfirmation = () => (
    <Row gutter="2">
      <Col size="2" />
      <Col size="5" direction="row-reverse">
        <Button size="xxsm" onClick={handleClick} id={`${id}_footer_close`}>
          CANCELAR
        </Button>
      </Col>
      <Col size="5" direction="row-reverse">
        <Button size="xxsm" onClick={handleClickConfirm} id={`${id}_footer_confirm`}>
          CONFIRMAR
        </Button>
      </Col>
    </Row>
  );

  return (
    <StyledModal id={id} className={`wrapper  fade-${fadeType}`} role="dialog" type={type}>
      <DialogBox id={`${id}_box`}>
        <DialogHeader id={`${id}_header`}>
          <Typography variant="title2" id={`${id}_title`}>
            {title}
          </Typography>
          <CircleButton border="none" icon="close" id={`${id}_close`} onClick={handleClick} />
        </DialogHeader>
        <DialogContent id={`${id}_content`}>
          {message.map((item, idx) => (
            <Typography key={uniqueId()} variant="subtitle2" id={`${id}_${idx}_content`}>
              {item}
            </Typography>
          ))}
          {children}
        </DialogContent>
        {type === 'confirmation' && (
          <DialogFooter id={`${id}_footer`}>{renderActionConfirmation()}</DialogFooter>
        )}
      </DialogBox>
      <DialogBackground
        id={`${id}_background`}
        className={`fade-${fadeType}`}
        onMouseDown={handleClick}
        ref={background}
      />
    </StyledModal>
  );
};

Dialog.propTypes = {
  openDialog: bool,
  type: string,
  id: string,
  onClickConfirm: func,
  onClickClose: func.isRequired,
  message: arrayOf(string),
  title: string,
  children: node,
};

Dialog.defaultProps = {
  openDialog: false,
  message: [],
  type: '',
  title: '',
  id: 'dialog',
  onClickConfirm: () => {},
  children: undefined,
};

export default Dialog;
