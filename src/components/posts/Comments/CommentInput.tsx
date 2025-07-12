import { Flex, Textarea, Button, Text, Input, useColorModeValue } from "@chakra-ui/react";
import { User } from "firebase/auth";
import React, { useState } from "react";
import AuthButtons from "../../../Navbar/RightContent/AuthButtons";

type CommentInputProps = {
  user: User;
  createLoading: boolean;
  onCreateComments: (title: string, description: string, tags: string) => void;
};

const CommentInput: React.FC<CommentInputProps> = ({
  user,
  createLoading,
  onCreateComments,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const bg = useColorModeValue("white", "#1A202C");
  const bgBottom = useColorModeValue("gray.100", "#1A202C");
  return (
    <Flex direction="column" position="relative">
      {user ? (
        <>
          <Text mb={1}>Title</Text>
          <Input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Title of your answer"
            fontSize="10pt"
            borderRadius={4}
            mb={2}
          />
          <Text mb={1}>Description</Text>
          <Textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Description"
            fontSize="10pt"
            borderRadius={4}
            minHeight="80px"
            mb={2}
          />
          <Text mb={1}>Tags (comma separated)</Text>
          <Input
            value={tags}
            onChange={(event) => setTags(event.target.value)}
            placeholder="e.g. sql, join, beginner"
            fontSize="10pt"
            borderRadius={4}
            mb={2}
          />
          <Flex
            justify="flex-end"
            bg={bgBottom}
            p="6px 8px"
            borderRadius="0px 0px 4px 4px"
          >
            <Button
              height="26px"
              disabled={!title.length || !description.length}
              isLoading={createLoading}
              onClick={() => onCreateComments(title, description, tags)}
            >
              Submit
            </Button>
          </Flex>
        </>
      ) : (
        <Flex
          align="center"
          justify="space-between"
          borderRadius={2}
          border="1px solid"
          borderColor="gray.100"
          p={4}
        >
          <Text fontWeight={600}>Log in or sign up to leave a comment</Text>
          <AuthButtons />
        </Flex>
      )}
    </Flex>
  );
};
export default CommentInput;
