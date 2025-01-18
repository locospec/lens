import { useState } from "react";

import React from "react";
import {
  Avatar,
  Button,
  Container,
  Section,
  Heading,
  Link,
  Box,
  Card,
  Flex,
  Skeleton,
  Text,
  TextField,
  Table,
} from "@radix-ui/themes";
import { Theme, ShellSidebar } from "../lib/main";

function TableExample() {
  return (
    <Table.Root style={{ backgroundColor: "var(--gray-a1)" }}>
      <Table.Header
        style={{
          backgroundColor: "var(--gray-a2)",
          borderTop: "1px solid var(--gray-a5)",
        }}
      >
        <Table.Row>
          <Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Group</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Group</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Group</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Group</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {Array.from({ length: 5 }).map((_, index) => (
          <Table.Row key={index}>
            <Table.RowHeaderCell>
              <Skeleton>User {index + 1} Lorem Ipsum</Skeleton>
            </Table.RowHeaderCell>
            <Table.Cell>
              <Skeleton>user{index + 1}@workos.com</Skeleton>
            </Table.Cell>
            <Table.Cell>
              <Skeleton>Role {index + 1}</Skeleton>
            </Table.Cell>
            <Table.Cell>
              <Skeleton>Role {index + 1}</Skeleton>
            </Table.Cell>
            <Table.Cell>
              <Skeleton>Role {index + 1}</Skeleton>
            </Table.Cell>
            <Table.Cell>
              <Skeleton>Role {index + 1}</Skeleton>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
}

function Login() {
  return (
    <Card asChild variant="classic" size="4">
      <form action="/">
        <Box height="40px" mb="4">
          <Heading as="h3" size="6" mt="-1">
            <Skeleton loading={false}>Sign up</Skeleton>
          </Heading>
        </Box>

        <Box mb="5">
          <Flex direction="column">
            <Text as="label" size="2" weight="medium" mb="2" htmlFor="email">
              <Skeleton loading={false}>Email address</Skeleton>
            </Text>
            <Skeleton loading={false}>
              <TextField.Root
                id="email"
                type="email"
                variant="classic"
                // placeholder="Enter your email"
                disabled
              />
            </Skeleton>
          </Flex>
        </Box>

        <Box mb="5" position="relative">
          <Box position="absolute" top="0" right="0" style={{ marginTop: -2 }}>
            <Link href="#" size="2">
              <Skeleton loading={false}>Forgot password?</Skeleton>
            </Link>
          </Box>

          <Flex direction="column">
            <Text as="label" size="2" weight="medium" mb="2" htmlFor="password">
              <Skeleton loading={false}>Password</Skeleton>
            </Text>
            <Skeleton loading={false}>
              <TextField.Root
                id="password"
                variant="classic"
                type="password"
                disabled
                // placeholder="Enter your password"
              />
            </Skeleton>
          </Flex>
        </Box>

        <Flex mt="6" justify="end" gap="3">
          <Skeleton loading={false}>
            <Button variant="surface" highContrast color="gray">
              Create an account
            </Button>
          </Skeleton>
          <Skeleton loading={false}>
            <Button variant="solid" type="submit">
              Sign in
            </Button>
          </Skeleton>
        </Flex>
      </form>
    </Card>
  );
}

function App() {
  return (
    <Theme>
      <ShellSidebar>
        <TableExample />
        <Box
          style={{
            height: "100%",
            backgroundColor: "var(--gray-a3)",
            backgroundClip: "padding-box",
            border: "1px solid var(--gray-a5)",
            borderRadius: "var(--radius-1)",
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.2' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></Box>

        <Section size={"2"}>
          <TableExample />
        </Section>
      </ShellSidebar>
    </Theme>
  );
}

export default App;
