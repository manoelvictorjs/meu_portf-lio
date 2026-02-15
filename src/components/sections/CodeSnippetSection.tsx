"use client";

import { motion } from "framer-motion";

const snippet = `// Exemplo: Service com injeção de dependência (NestJS)
@Injectable()
export class OrderService {
  constructor(
    private readonly orderRepo: OrderRepository,
    private readonly eventBus: EventEmitter2,
  ) {}

  async create(dto: CreateOrderDto): Promise<Order> {
    const order = await this.orderRepo.save(dto);
    this.eventBus.emit('order.created', { orderId: order.id });
    return order;
  }
}`;

export function CodeSnippetSection() {
  return (
    <section
      id="code"
      className="scroll-mt-24 border-t border-border py-16 md:py-24"
      aria-labelledby="code-heading"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 id="code-heading" className="text-3xl font-bold text-foreground md:text-4xl">
            Código &amp; Padrões
          </h2>
          <p className="mt-2 text-muted-foreground">
            Design patterns e boas práticas que aplico no dia a dia
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 overflow-hidden rounded-xl border border-border bg-[#1e1e2e] shadow-lg"
        >
          <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-2">
            <span className="h-3 w-3 rounded-full bg-red-500/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <span className="h-3 w-3 rounded-full bg-green-500/80" />
            <span className="ml-2 font-mono text-xs text-muted-foreground">order.service.ts</span>
          </div>
          <pre className="overflow-x-auto p-6 font-mono text-sm leading-relaxed text-slate-300">
            <code>{snippet}</code>
          </pre>
        </motion.div>
      </div>
    </section>
  );
}
