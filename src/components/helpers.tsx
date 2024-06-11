import AssetsAdded from '@spectrum-icons/workflow/AssetsAdded';
import AlertCircleFilled from '@spectrum-icons/workflow/AlertCircleFilled';
import { IllustratedMessage, Heading, Content } from '@adobe/react-spectrum';

export const capitalize = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1);

export function renderEmptyState(heading: string, message: string) {
  return (
    <IllustratedMessage >
      <AssetsAdded size="L" marginBottom="size-100" />
      <Heading>{heading}</Heading>
      <Content>{message}</Content>
    </IllustratedMessage>
  );
}

export function renderErrorState(heading: string, message: string) {
  return (
    <IllustratedMessage UNSAFE_className='absoluteCenter' >
      <AlertCircleFilled size="L" marginBottom="size-100" />
      <Heading>{heading}</Heading>
      <Content>{message}</Content>
    </IllustratedMessage>
  );
}