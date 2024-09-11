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
import { platformSettingsData, conversationsData, projectsData } from "@/data";


export function Tables() {
  return (
    <>
      <Card className="mx-auto mt-10 mb-6 lg:mx-2 bg-transparent border-none shadow-none">
        <div className="ml-2 md:ml-6 flex">
          <Typography
            variant="small"
            className="mx-3 font-normal text-blue-gray-500 cursor-pointer border border-blue-gray-500 rounded-md w-fit p-1 px-2"
          >
            filter
          </Typography>
          <Typography
          variant="small"
          className="font-normal text-blue-gray-500 border cursor-pointer border-blue-gray-500 rounded-md w-fit p-1"
          >
            sort
          </Typography>

        </div>

        <CardBody className="p-4">
          <div className="md:px-4 md:pb-4">
            

            <div className="mt-6 grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3 rounded-md">
              {projectsData.map(
                ({ img, title, description, tag, route,cost, members }) => (
                  <Card key={title} color="transparent" shadow={false} className="bg-white">
                    <CardHeader
                      floated={false}
                      color="white"
                      className="mx-0 mt-0 mb-4 h-64 xl:h-40"
                    >
                      <img
                        src={img}
                        alt={title}
                        className="h-full w-full object-cover shadow-none"
                      />
                    </CardHeader>
                    <CardBody className="py-0 px-2">
                      <Typography
                        variant="small"
                        className="font-normal text-blue-gray-500"
                      >
                        {tag}
                      </Typography>
                      <Typography
                        variant="h5"
                        color="blue-gray"
                        className="mt-1 mb-2"
                      >
                        {title}
                      </Typography>
                      <Typography
                        variant="small"
                        className="font-normal text-blue-gray-500"
                      >
                        {description}
                      </Typography>
                    </CardBody>
                    <CardFooter className="mt-6 flex items-end justify-between py-0 px-2 mb-3">
                      
                        <h2 className="text-lg text-blue-700 font-semibold">
                          {cost}
                        </h2>
                      
                      <div>
                       <button className="text-blue-700 border border-blue-700 rounded-md p-1">
                        Discover More
                       </button>
                      </div>
                    </CardFooter>
                  </Card>
                )
              )}
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
}

export default Tables;
