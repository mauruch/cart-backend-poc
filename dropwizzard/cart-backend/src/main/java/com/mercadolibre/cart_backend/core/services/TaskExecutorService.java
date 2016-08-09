package com.mercadolibre.cart_backend.core.services;

import com.fasterxml.jackson.databind.node.ObjectNode;
import com.mercadolibre.cart_backend.core.MarshallerBase;
import com.mercadolibre.cart_backend.core.TaskBase;
import com.mercadolibre.cart_backend.core.entities.EntityBase;

import java.util.Map;

/**
 * Created by fvitali on 8/8/16.
 */
public class TaskExecutorService {
	private TaskLocatorService taskLocatorService;
	private MarshallerLocatorService marshallerLocatorService;

	public TaskExecutorService(TaskLocatorService taskLocatorService,
							   MarshallerLocatorService marshallerLocatorService) {

		this.taskLocatorService = taskLocatorService;
		this.marshallerLocatorService = marshallerLocatorService;
	}

	public ObjectNode executeTask(String taskName, String client, String version, Map<String, Object> params) {
		TaskBase<EntityBase> task = taskLocatorService.get(taskName, client, version, params);

		if (task == null) {
			throw new IllegalArgumentException(String.format("Cannot find task %s", taskName));
		}

		EntityBase entity = task.execute(params);

		if (entity == null) {
			return null;
		}

		MarshallerBase<EntityBase> marshaller = marshallerLocatorService.get(entity);

		ObjectNode objectNode = marshaller.getJson(entity);

		return objectNode;
	}
}
