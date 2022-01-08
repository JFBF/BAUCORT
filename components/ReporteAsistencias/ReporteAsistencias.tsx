import React from 'react';

// Ant Design
import { Calendar as AntCalendar, Badge, Button, Input } from 'antd';
import { PresetStatusColorType } from '../../node_modules/antd/lib/_util/colors';

// Styles
import styles from './ReporteAsistencias.module.scss';

interface ReporteAsistenciasData {
  type: PresetStatusColorType;
  content: string;
}

function getListData(value: moment.Moment): ReporteAsistenciasData[] {
  let listData;

  switch (value.date()) {
    case 8:
      listData = [
        {
          type: 'warning' as PresetStatusColorType,
          content: 'This is warning event.',
        },
        {
          type: 'success' as PresetStatusColorType,
          content: 'This is usual event.',
        },
      ];
      break;
    case 10:
      listData = [
        {
          type: 'warning' as PresetStatusColorType,
          content: 'This is warning event.',
        },
        {
          type: 'success' as PresetStatusColorType,
          content: 'This is usual event.',
        },
        {
          type: 'error' as PresetStatusColorType,
          content: 'This is error event.',
        },
      ];
      break;
    case 15:
      listData = [
        {
          type: 'warning' as PresetStatusColorType,
          content: 'This is warning event',
        },
        {
          type: 'success' as PresetStatusColorType,
          content: 'This is very long usual event....',
        },
        {
          type: 'error' as PresetStatusColorType,
          content: 'This is error event 1.',
        },
        {
          type: 'error' as PresetStatusColorType,
          content: 'This is error event 2.',
        },
        {
          type: 'error' as PresetStatusColorType,
          content: 'This is error event 3.',
        },
        {
          type: 'error' as PresetStatusColorType,
          content: 'This is error event 4.',
        },
      ];
      break;
    default:
  }
  return listData || [];
}

const ReporteAsistencias: React.FC = () => {
  const dateCellRender = React.useCallback((value: moment.Moment) => {
    const listData = getListData(value);
    return (
      <ul className={styles.events}>
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  }, []);

  const getMonthData = React.useCallback((value: moment.Moment) => {
    if (value.month() === 8) {
      return 1394;
    }
  }, []);

  // SI QUIERE AGREGAR COSAS EN LA VISTA DEL AÑO, SINO LA PUEDE BORRAR
  const monthCellRender = React.useCallback(
    (value: moment.Moment) => {
      const num = getMonthData(value);
      return num ? (
        <div className={styles.notesMonth}>
          <section>{num}</section>
          <span>PABLO lok</span>
        </div>
      ) : null;
    },
    [getMonthData],
  );

  return (
    <div className={styles.container}>
      <section>
        <h1>REPORTE ASISTENCIAS</h1>
      </section>
      <section className={styles.header}>
        <Input />
        <Input />
        <Button>Buscar </Button>
      </section>
      <AntCalendar
        className={styles.calendar}
        dateCellRender={dateCellRender}
        monthCellRender={monthCellRender}
      />
    </div>
  );
};

export default ReporteAsistencias;
