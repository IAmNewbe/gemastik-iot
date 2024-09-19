import PropTypes from "prop-types";
import { Avatar, Typography } from "@material-tailwind/react";
import { useMediaQuery } from 'react-responsive'

export function MessageCard({ img, name, message, action }) {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 800px)' });
  console.log(isSmallScreen)

  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <Avatar
          src={img}
          alt={name}
          variant=""
          className="w-[72px] h-[72px] md:w-20 md:h-20 rounded-sm"
        />
        <div>
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-1 font-medium md:font-semibold text-xs md:text-base"
          >
            {isSmallScreen ? name.slice(0, 45) + "..." : name}
          </Typography>
          <Typography className="text-[11px] md:text-sm font-normal text-blue-gray-400">
            {isSmallScreen ? message.slice(0,72) + "..." : message}
          </Typography>
          <Typography>
            {action}
          </Typography>
        </div>
      </div>
      
    </div>
  );
}

MessageCard.defaultProps = {
  action: null,
};

MessageCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  message: PropTypes.node.isRequired,
  action: PropTypes.node,
};

MessageCard.displayName = "/src/widgets/cards/message-card.jsx";

export default MessageCard;
