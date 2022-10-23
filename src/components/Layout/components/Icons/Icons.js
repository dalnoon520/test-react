import {
    HomeMajor,
    TemplateMajor,
    JobsMajor,
    ReadTimeMinor,
    ArchiveMajor,
    DiscountsMajor,
    GiftCardMajor,
    CustomerPlusMajor,
    PhoneMajor,
    QuestionMarkInverseMajor,
    SettingsMajor,
} from '@shopify/polaris-icons';
import { Icon } from '@shopify/polaris';

export default function HomeIcon2() {
    return <Icon source={HomeMajor} color="base" />;
}

export const DatalogIcon = () => {
    return <Icon source={TemplateMajor} color="base" />;
};

export const ActiveIcon = () => {
    return <Icon source={JobsMajor} color="base" />;
};

export const CompleteIcon = () => {
    return <Icon source={ReadTimeMinor} color="base" />;
};

export const CloseIcon = () => {
    return <Icon source={ArchiveMajor} color="base" />;
};

export const PercentIcon = () => {
    return <Icon source={DiscountsMajor} color="base" />;
};

export const GiftIcon = () => {
    return <Icon source={GiftCardMajor} color="base" />;
};

export const InviteIcon = () => {
    return <Icon source={CustomerPlusMajor} color="base" />;
};

export const ContactIcon = () => {
    return <Icon source={PhoneMajor} color="base" />;
};

export const FqaIcon = () => {
    return <Icon source={QuestionMarkInverseMajor} color="base" />;
};

export const SettingIcon = () => {
    return <Icon source={SettingsMajor} color="base" />;
};
