import React from "react"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import { MdSchool, MdStar } from "react-icons/md"

const TimeLineEffect = () => {
  return (
    <div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2020 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MdSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            FrontEnd Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Chennai, IN</h4>
          <p>Currently I'm contributing to some Open source Projects</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(203, 163, 254)", color: "#fff" }}
          iconStyle={{ background: "rgb(203, 163, 254)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(203, 163, 254)" }}
          date="2019 - 2020"
          icon={<MdStar />}
        >
          <h3 className="vertical-timeline-element-title">
            MTA Python Associate Certificate
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Chennai, IN</h4>
          <p>MTA certificate from Microsoft</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(54, 183, 238)", color: "#fff" }}
          iconStyle={{ background: "rgb(54, 183, 238)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(54, 183, 238)" }}
          date="2017 - 2020"
          icon={<MdSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            Panimalar Engineering College
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Poonamallee, IN
          </h4>
          <p>Studied Mechanical Engineering</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(255, 121, 121)", color: "#fff" }}
          iconStyle={{ background: "rgb(255, 121, 121)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(255, 121, 121)" }}
          date="2015 - 2017"
          icon={<MdSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            Vyasa Vidhyalaya Mat. Hr. Sec. School
          </h3>
          <h4 className="vertical-timeline-element-subtitle">MRTS, IN</h4>
          <p>Studied Computer Science Department</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(91, 207, 222)", color: "#fff" }}
          iconStyle={{ background: "rgb(91, 207, 222)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(91, 207, 222)" }}
          date="2013 - 2015"
          icon={<MdSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            Holy Prince Mat. Hr. Sec. School
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Madipakkam, IN</h4>
          <p>Studied till 10th standard</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<MdStar />}
        />
      </VerticalTimeline>
    </div>
  )
}

export default TimeLineEffect
