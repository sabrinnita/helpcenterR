import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import FindInPage from "@material-ui/icons/FindInPage";
import LocalShipping from "@material-ui/icons/LocalShipping";
import Schedule from "@material-ui/icons/Schedule";
import ReportProblem from "@material-ui/icons/ReportProblem";
import ThumbDownAlt from "@material-ui/icons/ThumbDownAlt";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import pillsStyle from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.jsx";

import Datetime from "react-datetime";

import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.jsx";

class SectionPills extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div id="navigation-pills">
          <GridContainer>
          <GridItem xs={12} sm={12} md={12} lg={6}>
                <NavPills
                  color="primary"
                  horizontal={{
                    tabsGrid: { xs: 12, sm: 4, md: 4 },
                    contentGrid: { xs: 12, sm: 8, md: 8 }
                  }}
                  tabs={[
                    {
                      tabButton: "Buscador",
                      tabIcon: FindInPage,
                      tabContent: (
                        <span>
                          <p>
                            Collaboratively administrate empowered markets via
                            plug-and-play networks. Dynamically procrastinate
                            B2C users after installed base benefits.
                          </p>
                          <br />
                          <p>
                            Dramatically visualize customer directed convergence
                            without revolutionary ROI. Collaboratively
                            administrate empowered markets via plug-and-play
                            networks. Dynamically procrastinate B2C users after
                            installed base benefits.
                          </p>
                          <br />
                          <p>
                            Dramatically visualize customer directed convergence
                            without revolutionary ROI. Collaboratively
                            administrate empowered markets via plug-and-play
                            networks. Dynamically procrastinate B2C users after
                            installed base benefits.
                          </p>
                        </span>
                      )
                    },
                    {
                      tabButton: "Ubica tu despacho",
                      tabIcon: LocalShipping,
                      tabContent: (
                          <div>
                            <div className={classes.title}>
                              <h3>Tu despacho actualmente se encuentra:</h3>
                            </div>                            
                            <CustomLinearProgress
                              variant="determinate"
                              color="info"
                              value={60}
                            />
                            <div>
                              <table>
                                <tbody>
                                  <tr>
                                    <td>Orden Recibida  </td>
                                    <td>Pedido Confeccionado  </td>
                                    <td>Pedido Despachado </td>
                                    <td>Entregado</td>
                                  </tr>
                                </tbody>                              
                              </table>
                            </div>
                          </div>
                      )
                    },
                    {
                      tabButton: "Reprograma tu entrega",
                      tabIcon: Schedule,
                      tabContent: (
                        <div>
                          <p>La fecha actual de tu despacho es el 22/11/2018,
                            si deseas reagendarla selecciona la nueva fecha
                            y hora que deseas recibir tu compra</p>
                          <Datetime inputProps={{ placeholder: "Fecha y Hora" }} />
                        </div>
                      )
                    },
                    {
                      tabButton: "Producto en mal estado",
                      tabIcon: ReportProblem,
                      tabContent: (
                        <span>
                          <p>
                            Efficiently unleash cross-media information without
                            cross-media value. Quickly maximize timely
                            deliverables for real-time schemas.
                          </p>
                          <br />
                          <p>
                            Dramatically maintain clicks-and-mortar solutions
                            without functional solutions. Dramatically visualize
                            customer directed convergence without revolutionary
                            ROI. Collaboratively administrate empowered markets
                            via plug-and-play networks. Dynamically
                            procrastinate B2C users after installed base
                            benefits.
                          </p>
                        </span>
                      )
                    },
                    {
                      tabButton: "Producto Faltante",
                      tabIcon: ThumbDownAlt,
                      tabContent: (
                        <span>
                          <p>
                            Collaboratively administrate empowered markets via
                            plug-and-play networks. Dynamically procrastinate
                            B2C users after installed base benefits.
                          </p>
                          <br />
                          <p>
                            Dramatically visualize customer directed convergence
                            without revolutionary ROI. Collaboratively
                            administrate empowered markets via plug-and-play
                            networks. Dynamically procrastinate B2C users after
                            installed base benefits.
                          </p>
                          <br />
                          <p>
                            Dramatically visualize customer directed convergence
                            without revolutionary ROI. Collaboratively
                            administrate empowered markets via plug-and-play
                            networks. Dynamically procrastinate B2C users after
                            installed base benefits.
                          </p>
                        </span>
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(pillsStyle)(SectionPills);
