import { toast } from 'react-hot-toast';


const failed = error => {
    const errorMessage = error.message;
    const errorCode = error.code;

    toast.error(errorMessage);

    console.error(errorCode);
    console.error(errorMessage);
}

const getStatusBadgeColor = (status) => {
    switch (status) {
        case "In Review":
            return "badge-warning";
        case "Accepted":
            return "badge-success";
        case "Rejected":
            return "badge-error";
        default:
            return "";
    }
}

const getTourTypeBadgeColor = (tourType) => {
    let badgeColor = '';

    switch (tourType) {
        case 'Adventure':
        case 'Nature':
        case 'Wildlife':
            badgeColor = 'badge-accent';
            break;
        case 'Cultural':
        case 'Foods':
        case 'Historical':
            badgeColor = 'badge-warning';
            break;
        case 'City':
        case 'Photography':
        case 'Beach':
            badgeColor = 'badge-info';
            break;
        case 'Relaxation':
            badgeColor = 'badge-secondary';
            break;
        default:
            badgeColor = 'badge-default';
    }

    return badgeColor;
};


export { failed, getStatusBadgeColor, getTourTypeBadgeColor };