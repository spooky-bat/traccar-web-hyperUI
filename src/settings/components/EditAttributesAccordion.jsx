import { useState, useEffect, useRef } from 'react';

import {
  Button,
  Checkbox,
  OutlinedInput,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  FormHelperText,
  Popover,
  Box,
  TextField,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import AddAttributeDialog from './AddAttributeDialog';
import { useTranslation } from '../../common/components/LocalizationProvider';
import { useAttributePreference } from '../../common/util/preferences';
import {
  distanceFromMeters, distanceToMeters, distanceUnitString, speedFromKnots, speedToKnots, speedUnitString, volumeFromLiters, volumeToLiters, volumeUnitString,
} from '../../common/util/converter';
import useFeatures from '../../common/util/useFeatures';
import useSettingsStyles from '../common/useSettingsStyles';

const EditAttributesAccordion = ({
  attribute, attributes, setAttributes, definitions, focusAttribute, onValidation,
}) => {
  const { classes } = useSettingsStyles();
  const t = useTranslation();

  const features = useFeatures();

  const speedUnit = useAttributePreference('speedUnit');
  const distanceUnit = useAttributePreference('distanceUnit');
  const volumeUnit = useAttributePreference('volumeUnit');

  const [addDialogShown, setAddDialogShown] = useState(false);
  const [errors, setErrors] = useState({});

  const [openColorPickerKey, setOpenColorPickerKey] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const validate = (key, value, subtype) => {
    if (subtype === 'color') {
      if (value && !/^#([0-9A-Fa-f]{3}){1,2}$/.test(value)) {
        setErrors((prev) => ({ ...prev, [key]: true }));
        return false;
      }
    }
    setErrors((prev) => ({ ...prev, [key]: false }));
    return true;
  };

  useEffect(() => {
    if (onValidation) {
      onValidation(Object.values(errors).some((e) => e));
    }
  }, [errors, onValidation]);

  const updateAttribute = (key, value, type, subtype) => {
    validate(key, value, subtype);
    const updatedAttributes = { ...attributes };
    switch (subtype) {
      case 'speed':
        updatedAttributes[key] = speedToKnots(Number(value), speedUnit);
        break;
      case 'distance':
        updatedAttributes[key] = distanceToMeters(Number(value), distanceUnit);
        break;
      case 'volume':
        updatedAttributes[key] = volumeToLiters(Number(value), volumeUnit);
        break;
      default:
        updatedAttributes[key] = type === 'number' ? Number(value) : value;
        break;
    }
    setAttributes(updatedAttributes);
  };

  const deleteAttribute = (key) => {
    const updatedAttributes = { ...attributes };
    delete updatedAttributes[key];
    setAttributes(updatedAttributes);
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const getAttributeName = (key, subtype) => {
    const definition = definitions[key];
    const name = definition ? definition.name : key;
    switch (subtype) {
      case 'speed':
        return `${name} (${speedUnitString(speedUnit, t)})`;
      case 'distance':
        return `${name} (${distanceUnitString(distanceUnit, t)})`;
      case 'volume':
        return `${name} (${volumeUnitString(volumeUnit, t)})`;
      default:
        return name;
    }
  };

  const getAttributeType = (value) => {
    if (typeof value === 'number') {
      return 'number';
    } if (typeof value === 'boolean') {
      return 'boolean';
    }
    return 'string';
  };

  const getAttributeSubtype = (key) => {
    const definition = definitions[key];
    return definition && definition.subtype;
  };

  const getDisplayValue = (value, subtype) => {
    if (value) {
      switch (subtype) {
        case 'speed':
          return speedFromKnots(value, speedUnit);
        case 'distance':
          return distanceFromMeters(value, distanceUnit);
        case 'volume':
          return volumeFromLiters(value, volumeUnit);
        default:
          return value;
      }
    }
    return '';
  };

  const convertToList = (attributes) => {
    const booleanList = [];
    const otherList = [];
    const excludeAttributes = ['speedUnit', 'distanceUnit', 'altitudeUnit', 'volumeUnit', 'timezone'];
    Object.keys(attributes || []).filter((key) => !excludeAttributes.includes(key)).forEach((key) => {
      const value = attributes[key];
      const type = getAttributeType(value);
      const subtype = getAttributeSubtype(key);
      if (type === 'boolean') {
        booleanList.push({
          key, value, type, subtype,
        });
      } else {
        otherList.push({
          key, value, type, subtype,
        });
      }
    });
    return [...otherList, ...booleanList];
  };

  const handleAddResult = (definition) => {
    setAddDialogShown(false);
    if (definition) {
      switch (definition.type) {
        case 'number':
          updateAttribute(definition.key, 0);
          break;
        case 'boolean':
          updateAttribute(definition.key, false);
          break;
        default:
          updateAttribute(definition.key, '');
          break;
      }
    }
  };

  return features.disableAttributes ? '' : (
    <Accordion defaultExpanded={!!attribute}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="subtitle1">
          {t('sharedAttributes')}
        </Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.details}>
        {convertToList(attributes).map(({
          key, value, type, subtype,
        }) => {
          if (type === 'boolean') {
            return (
              <Grid container direction="row" justifyContent="space-between" key={key}>
                <FormControlLabel
                  control={(
                    <Checkbox
                      checked={value}
                      onChange={(e) => updateAttribute(key, e.target.checked)}
                    />
                  )}
                  label={getAttributeName(key, subtype)}
                />
                <IconButton size="small" className={classes.removeButton} onClick={() => deleteAttribute(key)}>
                  <CloseIcon fontSize="small" />
                </IconButton>
              </Grid>
            );
          }
          const isColorAttribute = subtype === 'color';
          const isError = errors[key];
          return (
            <FormControl key={key} error={isError} fullWidth>
              <InputLabel>{getAttributeName(key, subtype)}</InputLabel>
              <OutlinedInput
                label={getAttributeName(key, subtype)}
                type={type === 'number' ? 'number' : 'text'}
                value={getDisplayValue(value, subtype)}
                onChange={(e) => updateAttribute(key, e.target.value, type, subtype)}
                autoFocus={focusAttribute === key}
                placeholder={isColorAttribute ? '#RRGGBB' : ''}
                endAdornment={(
                  <InputAdornment position="end">
                    {isColorAttribute && (
                      <>
                        <IconButton
                          size="small"
                          onClick={(e) => {
                            setOpenColorPickerKey(key);
                            setAnchorEl(e.currentTarget);
                          }}
                        >
                          <ColorLensIcon fontSize="small" />
                        </IconButton>
                        <Popover
                          open={openColorPickerKey === key}
                          anchorEl={anchorEl}
                          onClose={() => {
                            setOpenColorPickerKey(null);
                            setAnchorEl(null);
                          }}
                          anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                          }}
                          transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                          }}
                        >
                          <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <TextField
                              label={t('sharedHexColor')}
                              value={value || ''}
                              onChange={(e) => updateAttribute(key, e.target.value, type, subtype)}
                              size="small"
                              fullWidth
                            />
                            <input
                              type="color"
                              value={value || '#000000'}
                              onChange={(e) => updateAttribute(key, e.target.value, type, subtype)}
                              style={{ width: '100%', height: 50, border: 'none', padding: 0 }}
                            />
                          </Box>
                        </Popover>
                      </>
                    )}
                    <IconButton size="small" edge="end" onClick={() => deleteAttribute(key)}>
                      <CloseIcon fontSize="small" />
                    </IconButton>
                  </InputAdornment>
                )}
              />
              {isError && <FormHelperText>{t('errorInvalidColor')}</FormHelperText>}
            </FormControl>
          );
        })}
        <Button
          variant="outlined"
          color="primary"
          onClick={() => setAddDialogShown(true)}
          startIcon={<AddIcon />}
        >
          {t('sharedAdd')}
        </Button>
        <AddAttributeDialog
          open={addDialogShown}
          onResult={handleAddResult}
          definitions={definitions}
        />
      </AccordionDetails>
    </Accordion>
  );
};

export default EditAttributesAccordion;