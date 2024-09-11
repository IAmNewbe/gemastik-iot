import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Avatar,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
  Switch,
  Tooltip,
  Button,
} from "@material-tailwind/react";
import {
  HomeIcon,
  ChatBubbleLeftEllipsisIcon,
  Cog6ToothIcon,
  PencilIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { ProfileInfoCard, MessageCard } from "@/widgets/cards";
import { platformSettingsData, conversationsData, projectsData } from "@/data";

export function Profile() {
  return (
    <>
      <div className="">
        <div className="flex justify-between mx-2 my-3 items-center"> 
          <h2 className="font-bold text-xl md:text-2xl">
            Public Informations
          </h2>
          <p className="border border-gray-800 p-1 rounded-md">English</p>
        </div>
        
        <div className="mb-4 ">
          <Card className="border border-blue-gray-100 shadow-sm ">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 p-3"
            >
            </CardHeader>
            <CardBody className="pt-0">
              <ul className="flex flex-col gap-6">
                  {conversationsData.map((props) => (
                    <MessageCard
                      key={props.name}
                      {...props}
                      action={
                        <button className="text-blue-700 flex text-xs mt-1 font-semibold">
                        Read More
                        </button>
                      }
                    />
                  ))}
              </ul>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Profile;
