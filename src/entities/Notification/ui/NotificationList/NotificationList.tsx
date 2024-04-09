import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { VStack } from "@/shared/ui/Stack";
import { Skeleton } from "@/shared/ui/Skeleton";
import { useNotifications } from "../../api/notificationApi";
import cls from "./NotificationList.module.scss";
import { NotificationItem } from "../NotificationItem/NotificationItem";

interface NotificationListProps {
  className?: string;
}

export const NotificationList = memo((props: NotificationListProps) => {
  const { className } = props;
  const { data, isLoading } = useNotifications(null, {
    pollingInterval: 10000,
  });

  if (isLoading) {
    return (
      <VStack
        gap="16"
        max
        className={classNames(cls.NotificationList, {}, [className])}
      >
        {/* eslint-disable-next-line i18next/no-literal-string */}
        <Skeleton width="100%" border="8px" height="80px" />
        {/* eslint-disable-next-line i18next/no-literal-string */}
        <Skeleton width="100%" border="8px" height="80px" />
        {/* eslint-disable-next-line i18next/no-literal-string */}
        <Skeleton width="100%" border="8px" height="80px" />
      </VStack>
    );
  }

  return (
    <VStack
      gap="16"
      max
      className={classNames(cls.NotificationList, {}, [className])}
    >
      {data?.map((item) => (
        <NotificationItem key={item.id} item={item} />
      ))}
    </VStack>
  );
});
