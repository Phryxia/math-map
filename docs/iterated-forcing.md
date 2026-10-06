# 반복 강제법

# 개요

반복 강제법은 강제 확대를 차례로 쌓는 구성이다. 한 번의 확대로는 모든 반례를 없앨 수 없는 명제를 긴 반복으로 처리한다.

두 단계는 이름을 써서 하나의 강제 순서로 묶고, 길이가 극한인 단계에서는 몇 개의 좌표에서 조건이 자명하지 않은 값을 가져도 되는지를 정해야 한다. 그 선택이 어떤 성질이 보존되는지를 가른다.

# 직관

[Martin 의 공리](martins-axiom.md)는 모든 ccc(countable chain condition) 부분순서에 대해 조밀집합 $\aleph_1$ 개를 만나는 필터가 있다는 명제다. 한 번의 강제법은 미리 고른 순서 $\mathbb Q$ 하나에 대해 그런 필터를 준다.

$V\lbrack G_0\rbrack$ 에는 $V$ 에 없던 ccc 부분순서가 새로 생긴다. 그것들에 대한 필터는 아직 없으므로 $V\lbrack G_0\rbrack$ 에서 다시 강제한다. 그러면 $V\lbrack G_0\rbrack\lbrack G_1\rbrack$ 에 또 새 ccc 부분순서가 생긴다. 한 번으로 끝나지 않는다.

두 번 강제한 것은 $V$ 에서 한 번 강제한 것으로 쓸 수 있다. $\mathbb Q$ 는 $V$ 에 없지만 그 $\mathbb P\_0$ 이름 $\dot{\mathbb Q}$ 는 $V$ 에 있으므로, 조건을 쌍 $(p,\dot q)$ 로 두는 순서를 $V$ 에서 정의하면 그 순서의 일반 확대가 $V\lbrack G_0\rbrack\lbrack G_1\rbrack$ 이다. 이 묶음을 되풀이하면 유한 번의 단계는 모두 한 번의 강제법이 된다.

단계를 $\omega_2$ 번 쌓으려면 극한 단계에서 조건이 무엇인지를 정해야 한다. 조건을 좌표마다 값을 주는 함수로 보면 극한 단계에서 좌표가 무한히 많고, 무한한 좌표에서 자명하지 않은 값을 허용할지를 골라야 한다. 유한 개만 허용하면 ccc 가 반복 전체로 올라가고, 가산 개를 허용하면 ccc 는 깨지지만 $\aleph_1$ 을 보존하는 다른 조건이 올라간다.

# 정의

## 두 단계 반복

$\mathbb P$ 가 강제 순서이고 $\dot{\mathbb Q}$ 가 강제 순서임을 $\mathbb P$ 가 강제하는 이름이면, 두 단계 반복은

$$
\mathbb P\ast\dot{\mathbb Q}=\lbrace(p,\dot q)\thinspace\colon\thinspace p\in\mathbb P,\ p\Vdash\dot q\in\dot{\mathbb Q}\rbrace
$$

이고 순서는 $(p',\dot q')\le(p,\dot q)$ 를 $p'\le p$ 와 $p'\Vdash\dot q'\le\dot q$ 로 정의한다.

## 길이 $\alpha$ 의 반복

$\mathbb P\_0$ 을 자명한 순서로 두고, 각 단계에서 $\mathbb P\_\beta$ 이름 $\dot{\mathbb Q}\_\beta$ 를 하나 고른다. 후계 단계는 $\mathbb P\_{\beta+1}=\mathbb P\_\beta\ast\dot{\mathbb Q}\_\beta$ 다. 극한 단계 $\gamma$ 에서 $\mathbb P\_\gamma$ 의 조건은 정의역이 $\gamma$ 인 함수 $p$ 이고, 각 $\beta$ 에서 $p(\beta)$ 는 $\dot{\mathbb Q}\_\beta$ 의 원소를 가리키는 이름이다.

## 지지 집합

조건 $p$ 의 **지지**는 $\mathrm{supp}(p)=\lbrace\beta\thinspace\colon\thinspace p(\beta)\ne\mathbb 1\rbrace$ 다. 극한 단계의 조건을 지지가 유한인 것으로 제한한 반복이 **유한지지 반복**이고, 가산인 것으로 제한한 반복이 **가산지지 반복**이다.

# 성질

## 결합법칙

$G$ 가 $\mathbb P\ast\dot{\mathbb Q}$ 의 일반 필터이면 $G$ 의 첫 좌표가 $\mathbb P$ 의 일반 필터 $G_0$ 을 주고, 둘째 좌표가 $\dot{\mathbb Q}\lbrack G_0\rbrack$ 의 일반 필터 $G_1$ 을 준다. 이때

$$
V\lbrack G\rbrack=V\lbrack G_0\rbrack\lbrack G_1\rbrack
$$

이고 역으로 그런 $G_0,G_1$ 의 쌍이 $\mathbb P\ast\dot{\mathbb Q}$ 의 일반 필터를 준다. 두 단계 반복으로 한 번 강제하는 것과 차례로 두 번 강제하는 것이 같은 모형을 준다.

## 유한지지 반복의 ccc

각 단계가 ccc 임을 앞 단계가 강제하면 유한지지 반복 전체가 ccc 다.

증명의 요지. 극한 단계에서 조건 $\aleph_1$ 개를 받는다. 지지가 유한이므로 $\Delta$ 체계 보조정리로 지지들이 공통의 뿌리를 갖고 그 밖에서 서로 겹치지 않는 부분족 $\aleph_1$ 개를 뽑는다. 뿌리는 유한 집합이므로 그 위에서 두 조건이 양립하는 경우를 각 단계의 ccc 로 찾고, 뿌리 밖에서는 지지가 겹치지 않아 조건을 그대로 이어 붙인다.

## 가산지지 반복과 properness

가산지지 반복은 ccc 를 보존하지 않는다. properness 는 보존한다. 곧 각 단계가 proper 임을 앞 단계가 강제하면 가산지지 반복 전체가 proper 이고, 따라서 $\aleph_1$ 이 보존된다.[^1]

가산지지 반복은 길이가 $\omega_1$ 을 넘으면 연속체 가설을 깨면서도 $\aleph_1$ 을 그대로 두므로, ccc 가 성립하지 않는 순서를 반복해야 하는 무모순성 증명에서 쓰인다.

## 반복의 길이와 연속체의 크기

각 단계가 새 실수를 더하는 길이 $\omega_2$ 의 반복에서는 $\aleph_1$ 이 보존되고 $\aleph_2$ 개의 실수가 생기므로 확대에서 $2^{\aleph_0}=\aleph_2$ 다. 위쪽 한계는 반복의 조건 개수를 세어 얻는다.

반복의 각 단계에서 어느 순서를 처리할지는 미리 정한 대응으로 배정한다. 길이 $\omega_2$ 의 반복에서 중간 모형에 나타나는 순서를 모두 세어 단계마다 하나씩 배정하면, 반복이 최종 모형의 순서를 하나도 빠뜨리지 않고 처리한다.

# 활용

- [Martin 의 공리](martins-axiom.md): Solovay 와 Tennenbaum 은 ccc 순서를 유한지지로 $\omega_2$ 번 반복해 Martin 의 공리와 $2^{\aleph_0}=\aleph_2$ 가 함께 성립하는 모형을 얻었다.[^2] 유한지지 반복의 ccc 가 $\aleph_1$ 보존을 준다.
- [Borel 추측](borel-conjecture.md): Laver 는 일반적 실수를 더하는 순서를 가산지지로 $\omega_2$ 번 반복해 모든 강 측도 영집합이 가산인 모형을 얻었다. 반례가 중간 단계에 나타나고 그 뒤의 반복이 없앤다.
- [Suslin 문제](suslin-problem.md): Martin 의 공리에서 Suslin 가설이 따라 나오므로 위 반복이 Suslin 가설의 무모순성도 준다.
- [무작위 실수 강제법](random-real-forcing.md): 측도 영집합 아이디얼로 만든 순서의 반복이 Lebesgue 측도와 범주의 성질을 가른다.

[^1]: Saharon Shelah, *Proper and Improper Forcing*, 2nd ed., Springer (1998). 가산지지 반복의 properness 보존 정리와 그 변형들이 이 책의 주제다.

[^2]: R. M. Solovay and S. Tennenbaum, "Iterated Cohen Extensions and Souslin's Problem", Annals of Mathematics 94 (1971), https://www.jstor.org/stable/1970860

# 연관 문서

## 선수지식

- [강제법](forcing.md)

## 더 알아보기

- [Borel 추측](borel-conjecture.md)

#set_theory #logic #foundations #measure_theory
