# P 대 NP 문제

P 대 NP 문제는 답이 맞는지 다항시간에 확인할 수 있는 모든 결정 문제를 다항시간에 풀 수도 있는지 묻는다.

## 정의

입력은 유한 이진 문자열이고 입력 길이를 n이라 하자. P는 결정적 Turing machine이 입력 길이의 다항식으로 제한된 시간 안에 판정하는 문제들의 모임이다.

NP는 예인 입력에 대해 다항식 길이의 증명서가 존재하고, 그 증명서를 결정적 다항시간 알고리즘으로 검증할 수 있는 결정 문제들의 모임이다. 아니오인 입력에는 검증기를 통과하는 증명서가 없어야 한다.

L을 결정 문제에 해당하는 문자열 집합, x를 입력 문자열, y를 증명서, V를 검증기, p를 길이 제한 다항식이라 하자.

$$
x\in L\iff\exists y:\ |y|\le p(|x|)\text{ and }V(x,y)=1
$$

검증기의 실행 시간은 입력과 증명서의 합친 길이에 대해 다항식으로 제한한다. NP의 이름은 nondeterministic polynomial time에서 왔으며, 다항시간이 아니라는 뜻이 아니다.

## 성질

P의 문제는 증명서를 무시하고 직접 판정해도 되므로 P는 NP에 포함된다.

$$
\mathrm P\subseteq\mathrm{NP}
$$

질문은 이 포함이 등호인지 엄밀한 포함인지다. 2026-09-12에 확인한 Clay Mathematics Institute의 문제 페이지는 미해결로 분류한다.

문제 A의 입력을 문제 B의 입력으로 다항시간에 변환하여 정답을 보존할 수 있으면 A가 B로 다항시간 환원된다고 한다. 모든 NP 문제가 B로 환원되고 B 자신도 NP에 속하면 B는 NP-complete다.

NP-complete 문제 하나에 다항시간 알고리즘이 있으면 P와 NP가 같다. 입력을 그 문제로 변환한 뒤 풀면 모든 NP 문제를 다항시간에 풀기 때문이다.

예를 들어 Boolean 만족 가능성 문제는 주어진 논리식이 참이 되도록 각 변수에 참·거짓을 배정할 수 있는지 묻는다. 배정을 받으면 논리식을 평가하여 빠르게 검증할 수 있다. Cook–Levin 정리는 이 문제가 NP-complete임을 말한다.

## 활용

정확한 일반해법을 찾는 문제와 근사·특수한 입력·평균적인 입력을 다루는 문제의 관계를 분석한다. 특정 탐색 방법이 지수시간이라는 사실만으로 모든 알고리즘이 느리다는 결론은 나오지 않는다.

다항시간은 복잡도 분류이며 실제 실행 속도를 보장하는 표현은 아니다. 또한 P와 NP의 차이는 정지 문제의 결정 불가능성과 다르다. NP 문제는 유한한 증명서 후보를 모두 확인하는 방식으로 결정 가능하다.

## 기타 참고 문헌

- [Clay Mathematics Institute, P vs NP](https://www.claymath.org/millennium/p-vs-np/): 미해결 상태 확인, 2026-09-12.
- [Stephen Cook, The P versus NP Problem](https://www.claymath.org/wp-content/uploads/2022/06/pvsnp.pdf): 공식 문제 설명, 계산 모델과 NP-completeness.
- 여기에 적은 포함 관계와 환원 결과는 증명된 사실이다. P와 NP의 동일 여부는 별개로 미해결이다.

# 연관 문서

## 선수지식

- [계산 가능성과 정지 문제](computability.md)

## 더 알아보기

- [NP-완전성과 Cook–Levin 정리](np-completeness.md)

#complexity
