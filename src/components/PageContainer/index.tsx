import { Box, Container, Group, ScrollArea, Stack, Title } from '@mantine/core';

import { PageContainerProps } from './types';

function PageContainer({
  children,
  title,
  titleProps,
  header,
  headerProps,
  rightSection = null,
  contentProps,
  outerContentProps,
  fullPage = false,
  withContentScroll = false,
  ...props
}: PageContainerProps) {
  function getTitle() {
    if (title) {
      return (
        <Title order={2} {...titleProps}>
          {title}
        </Title>
      );
    }
    return null;
  }

  function getHeader() {
    if (header) {
      return header;
    }
    return (
      <Group justify="space-between" w="100%" {...headerProps}>
        {getTitle()}
        {rightSection}
      </Group>
    );
  }

  function getContent() {
    if (fullPage) {
      return <Box {...contentProps}>{children}</Box>;
    }
    return (
      <Stack gap="xl" {...outerContentProps}>
        {getHeader()}
        <Stack px="xl" py="lg" h="100%" w="100%" {...contentProps}>
          {children}
        </Stack>
      </Stack>
    );
  }

  if (withContentScroll) {
    return (
      <ScrollArea h="100vh" p={0} {...props}>
        <Container fluid>{getContent()}</Container>
      </ScrollArea>
    );
  }

  return (
    <Container p={0} w="100%" fluid>
      {getContent()}
    </Container>
  );
}

export default PageContainer;
