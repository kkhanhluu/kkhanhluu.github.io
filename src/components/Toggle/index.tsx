import * as React from 'react';
import { FunctionComponent, ReactElement, useRef, useState } from 'react';
import * as styles from './toggle.module.scss';

interface ToggleProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  CheckedIcon: ReactElement;
  UncheckedIcon: ReactElement;
  checked: boolean;
  disabled?: boolean;
  className?: string;
  onFocus?: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
}
export const Toggle: FunctionComponent<ToggleProps> = ({
  CheckedIcon,
  UncheckedIcon,
  className = '',
  onFocus,
  onBlur,
  checked,
  disabled = false,
  ...inputProps
}) => {
  const [isChecked, setIsChecked] = useState(checked);
  const [focus, setFocus] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (event.target !== inputRef.current) {
      event.preventDefault();
      inputRef.current?.focus();
      inputRef.current?.click();
      return;
    }

    setIsChecked(checked => !checked);
  }

  function handleFocus(event: React.FocusEvent<HTMLInputElement, Element>) {
    if (onFocus) {
      onFocus(event);
    }
    setFocus(true);
  }

  function handleBlur(event: React.FocusEvent<HTMLInputElement, Element>) {
    if (onBlur) {
      onBlur(event);
    }
    setFocus(false);
  }

  const classes = `${styles.reactToggle} ${isChecked ? styles.reactToggleChecked : ''} ${
    focus ? styles.reactToggleFocus : ''
  } ${disabled ? styles.reactToggleDisabled : ''} ${className}`;

  return (
    <div className={classes} onClick={handleClick}>
      <div className={styles.reactToggleTrack}>
        {checked ? (
          <div className={styles.reactToggleTrackCheck}>{CheckedIcon}</div>
        ) : (
          <div className={styles.reactToggleTrackX}>{UncheckedIcon}</div>
        )}
      </div>
      <div className={styles.reactToggleThumb} />

      <input
        {...inputProps}
        ref={inputRef}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={styles.reactToggleScreenReaderOnly}
        type="checkbox"
        aria-label="Switch between Dark and Light mode"
      />
    </div>
  );
};
