import {
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const OurPlaces = () => {
  return (
    <div className="w-[90%] lg:w-1/2 xl:w-1/3 mx-auto mt-8">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            fontWeight:"bold"
          }}
        >
          أكتوبر
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li>
              الصف الأول
              <ul>
                <li>السبت - سنتر الحصرى - الساعة 9</li>
                <li>الإثنين - سنتر الأمل - الساعة 10</li>
              </ul>
            </li>
            <Divider
              sx={{
                my: "12px",
              }}
            />
            <li>
              الصف الثانى
              <ul>
                <li>السبت - سنتر الحصرى - الساعة 12</li>
                <li>الإثنين - سنتر الأمل - الساعة 1</li>
              </ul>
            </li>
            <Divider
              sx={{
                my: "12px",
              }}
            />
            <li>
              الصف الثالث
              <ul>
                <li>السبت - سنتر الحصرى - الساعة 5</li>
                <li>الإثنين - سنتر الأمل - الساعة 6</li>
              </ul>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            fontWeight:"bold"
          }}
        >
          زايد
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li>
              الصف الأول
              <ul>
                <li>السبت - سنتر الحصرى - الساعة 9</li>
                <li>الإثنين - سنتر الأمل - الساعة 10</li>
              </ul>
            </li>
            <Divider
              sx={{
                my: "12px",
              }}
            />
            <li>
              الصف الثانى
              <ul>
                <li>السبت - سنتر الحصرى - الساعة 12</li>
                <li>الإثنين - سنتر الأمل - الساعة 1</li>
              </ul>
            </li>
            <Divider
              sx={{
                my: "12px",
              }}
            />
            <li>
              الصف الثالث
              <ul>
                <li>السبت - سنتر الحصرى - الساعة 5</li>
                <li>الإثنين - سنتر الأمل - الساعة 6</li>
              </ul>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            fontWeight:"bold"
          }}
        >
          المرج
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li>
              الصف الأول
              <ul>
                <li>السبت - سنتر الحصرى - الساعة 9</li>
                <li>الإثنين - سنتر الأمل - الساعة 10</li>
              </ul>
            </li>
            <Divider
              sx={{
                my: "12px",
              }}
            />
            <li>
              الصف الثانى
              <ul>
                <li>السبت - سنتر الحصرى - الساعة 12</li>
                <li>الإثنين - سنتر الأمل - الساعة 1</li>
              </ul>
            </li>
            <Divider
              sx={{
                my: "12px",
              }}
            />
            <li>
              الصف الثالث
              <ul>
                <li>السبت - سنتر الحصرى - الساعة 5</li>
                <li>الإثنين - سنتر الأمل - الساعة 6</li>
              </ul>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            fontWeight:"bold"
          }}
        >
          الجيزة
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li>
              الصف الأول
              <ul>
                <li>السبت - سنتر الحصرى - الساعة 9</li>
                <li>الإثنين - سنتر الأمل - الساعة 10</li>
              </ul>
            </li>
            <Divider
              sx={{
                my: "12px",
              }}
            />
            <li>
              الصف الثانى
              <ul>
                <li>السبت - سنتر الحصرى - الساعة 12</li>
                <li>الإثنين - سنتر الأمل - الساعة 1</li>
              </ul>
            </li>
            <Divider
              sx={{
                my: "12px",
              }}
            />
            <li>
              الصف الثالث
              <ul>
                <li>السبت - سنتر الحصرى - الساعة 5</li>
                <li>الإثنين - سنتر الأمل - الساعة 6</li>
              </ul>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default OurPlaces;
